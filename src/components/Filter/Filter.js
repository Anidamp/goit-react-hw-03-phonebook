import s from './Filter.module.css';

export default function Filter({ filter, onChange }) {
  return (
    <label>
      Find contacts by name:
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
}