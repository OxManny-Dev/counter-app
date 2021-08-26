// Todo Go over making this code less redundant
export const ViewTwo = (props) => {
  return (
    <div>
      <ul>
        {
          props.items.map(anything => {
            return (
              <li
                onClick={() => alert(anything)}
              >
                {anything}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
};
export default ViewTwo;
