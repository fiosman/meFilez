import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles } from "../../actions/file_actions";
import FileListItem from "./file_list_item";
import Table from "react-bootstrap/Table";

function FileList() {
  const dispatch = useDispatch();

  const { files } = useSelector((state) => state.entities);
  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Date Created</th>
          </tr>
        </thead>
        {Object.keys(files).map((fileId, index) => {
          return <FileListItem file={files[fileId]} key={index} />;
        })}
      </Table>
      <p>test</p>
    </div>
  );
}

export default FileList;
