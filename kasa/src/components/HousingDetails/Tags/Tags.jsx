import styles from './Tags.module.scss';

const Tags = ({ tags }) => {
  return (
    <div className={styles.container}>
      {tags.map((tag, index) => (
        <span key={index} className={styles.span}>{tag}</span>
      ))}
    </div>
  );
};

export default Tags