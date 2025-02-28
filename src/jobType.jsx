export default function Jobtype({ type }) {
  return (
    <>
      <div className=" flex gap-1">
        <input type="checkbox" name="check" id="check" />
        <p>{type}</p>
      </div>
    </>
  );
}
