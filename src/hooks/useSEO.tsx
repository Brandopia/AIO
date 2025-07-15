
import { useEffect } from 'react';
import { SEOProps, updateSEO, defaultSEO } from '@/utils/seo';

export const useSEO = (seoProps: SEOProps = {}) => {
  useEffect(() => {
    const mergedSEO = { ...defaultSEO, ...seoProps };
    updateSEO(mergedSEO);

    // Cleanup function to reset to default SEO when component unmounts
    return () => {
      updateSEO(defaultSEO);
    };
  }, [seoProps]);
};
