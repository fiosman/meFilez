import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles, fetchFolder } from "../../actions/file_actions";
import RootFileItem from "./root_file_item";
import Table from "react-bootstrap/Table";

function RootFiles(props) {
  const dispatch = useDispatch();

  const { files } = useSelector((state) => state.entities);

  useEffect(() => {
    props.match.params.fileId === undefined
      ? dispatch(fetchFiles())
      : dispatch(fetchFolder(props.match.params.fileId));
  }, [dispatch, props.match.params.fileId]);

  function renderFiles() {
    if (Object.keys(files).length > 0) {
      return Object.keys(files).map((fileId, index) => (
        <RootFileItem file={files[fileId]} key={index} />
      ));
    } else {
      return <h2>Nothing to show here </h2>;
    }
  }

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
        <tbody>{renderFiles()}</tbody>
      </Table>
    </div>
  );
}

export default RootFiles;
