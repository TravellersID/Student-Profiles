import "./style.css";
import Tag from "components/tag/Tag";

const TagsList = (props) => {
  const { tags } = props;

  return (
    <div className="tags-list">
      {tags.map((tag, key) => (
        <Tag key={key} tag={tag} />
      ))}
    </div>
  );
};

export default TagsList;
