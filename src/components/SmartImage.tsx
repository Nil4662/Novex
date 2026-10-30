import { useState, type ImgHTMLAttributes } from 'react';
import { getFallbackImage } from '../utils/format';

// ============================================================================
//  تصویر هوشمند با جایگزین خودکار — Smart image with graceful fallback.
//  اگر تصویر مورد نظر موجود نباشد، یک تصویر جایگزین نمایش داده می‌شود.
//  این سیستم باعث ایجاد حلقه بی‌نهایت خطا نمی‌شود.
// ============================================================================

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  // آیا lazy-load شود؟ تصاویر پایین صفحه باید lazy باشند.
  lazy?: boolean;
}

export default function SmartImage({ src, alt, lazy = true, ...rest }: SmartImageProps) {
  const [errored, setErrored] = useState(false);

  return (
    <img
      src={errored ? getFallbackImage() : src}
      alt={alt}
      loading={lazy ? 'lazy' : 'eager'}
      onError={() => {
        // فقط یک‌بار به تصویر جایگزین سوییچ کن تا حلقه خطا ایجاد نشود.
        if (!errored) setErrored(true);
      }}
      {...rest}
    />
  );
}
