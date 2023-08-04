import JobsTableBodyRowLoading from '../JobsTableBodyRowLoading';

const rows = Array.from({ length: 50 }, (_, i) => i + 1);

export default function JobsTableBodyLoading() {
  return (
    <tbody>
      { rows.map((row) => (
        <JobsTableBodyRowLoading
          key={row}
        />
      )) }
    </tbody>
  );
}
