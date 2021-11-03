import { useState, useCallback, FC } from 'react';
import { TargetBox } from './TargetBox';
import { FileList } from './FileList';

export const Container: FC = () => {
  const [droppedFiles, setDroppedFiles] = useState<File[]>([]);

  const handleFileDrop = useCallback(
    (item) => {
      if (item) {
        const files = item.files;
        setDroppedFiles(files);
      }
    },
    [setDroppedFiles]
  );
  console.log(droppedFiles); //estoy obteniendo el estado pasado en cada llamada a la funcion

  return (
    <>
      <TargetBox onDrop={handleFileDrop} />
      <FileList files={droppedFiles} />
    </>
  );
};
