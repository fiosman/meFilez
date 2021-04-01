import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles } from "../../actions/file_actions";
import FileListItem from "./file_list_item";

function FileList() {
  const dispatch = useDispatch();

  const { files } = useSelector((state) => state.entities);
  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {Object.keys(files).map((fileId, index) => {
          return <FileListItem file={files[fileId]} key={index} />;
        })}
      </ul>
      <p>test</p>
    </div>
  );
}

export default FileList;
