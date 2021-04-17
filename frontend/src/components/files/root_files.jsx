import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles, fetchFolder } from "../../actions/file_actions";
import RootFileItem from "./root_file_item";
import Table from "react-bootstrap/Table";
import CreateUpload from "../upload_files/create_upload";
import Search from "../search_files/search";
import NothingToShow from "./nothing_to_show";

function RootFiles(props) {
  const dispatch = useDispatch();

  const { files } = useSelector((state) => state.entities);

  const filteredFiles = useSelector((state) => {
    if (files !== undefined) {
      let allFiles = [];
      for (const file in files) {
        if (
          files[file].fileName
            .toLowerCase()
            .includes(state.filters.search.toLowerCase())
        ) {
          allFiles.push(file);
        }
      }
      return allFiles;
    }
  });

  useEffect(() => {
    props.match.params.fileId === undefined
      ? dispatch(fetchFiles())
      : dispatch(fetchFolder(props.match.params.fileId));
  }, [dispatch, props.match.params.fileId]);

  function renderFiles() {
    if (filteredFiles.length > 0) {
      return filteredFiles.map((fileId, index) => (
        <RootFileItem file={files[fileId]} key={index} />
      ));
    }
  }

  return (
    <div>
      <Search />
      <CreateUpload />
      {filteredFiles.length > 0 ? (
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
      ) : (
        <NothingToShow />
      )}
    </div>
  );
}

export default RootFiles;
