import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles } from "../../actions/file_actions";

function UserFilesIndex() {
  const dispatch = useDispatch();

  const { files } = useSelector((state) => state.entities);
  console.log(files);

  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  return (
    <div>
      <p>does this work</p>
    </div>
  );
}

export default UserFilesIndex;
