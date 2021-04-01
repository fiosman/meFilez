import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles } from "../../actions/file_actions";
import FileListItem from "./file_list_item";

function FileList() {
  const dispatch = useDispatch();

  const { files } = useSelector((state) => state.entities);
  console.log(files.length);
  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  return (
    <div>
      {/* <ul>
        {files.map((file, index) => {
          <FileListItem file={file} key={index} />;
        })}
      </ul> */}
      <p>test</p>
    </div>
  );
}

export default FileList;
