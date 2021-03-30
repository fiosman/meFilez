import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles } from "../../actions/file_actions";

function FileList() {
  const dispatch = useDispatch();

  const { files } = useSelector((state) => state.entities);

  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  return (
    <div>
      <p>does this work</p>
    </div>
  );
}

export default FileList;
