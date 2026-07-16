import { useEffect } from 'react';

export function useDocumentTitle(title) {
  useEffect(() => {
    const defaultTitle = "Yen's Journey | Explore, Learn, Share";
    document.title = title ? `${title} | Yen's Journey` : defaultTitle;
  }, [title]);
}
