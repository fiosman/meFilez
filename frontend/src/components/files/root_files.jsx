import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles } from "../../actions/file_actions";
import RootFileItem from "./root_file_item";
import Table from "react-bootstrap/Table";

function RootFiles() {
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
            <th>Date Uploaded</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(files).map((fileId, index) => {
            return <RootFileItem file={files[fileId]} key={index} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default RootFiles;
