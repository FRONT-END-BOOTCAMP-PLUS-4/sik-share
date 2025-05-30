'use client';

import { useEffect, useState } from 'react';

export default function usePreloadedImageFiles(urls : string[]){
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(urls.length === 0){
      setLoading(false);
      return;
    }

    const fetchFiles = async () => {
      const fileList = await Promise.all(
        urls.map((url, idx) => urlToFile(url, `image_${idx}.jpg`))
      );

      setFiles(fileList);
      setLoading(false);
    }

    fetchFiles();
  }, [urls]);

  return { files, loading };
}


async function urlToFile(url: string, filename: string): Promise<File>{
  const res = await fetch(url);
  const blob = await res.blob();

  return new File([blob], filename, {type: blob.type || "image/jpeg"});
}