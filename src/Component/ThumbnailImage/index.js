import './index.css'

const ThumbnailImage = props => {
  const {thumbnailDetails, activeTab, changeScore} = props
  const {thumbnailUrl, id, category} = thumbnailDetails
  const onClickItem = () => {
    changeScore(id)
  }

  return activeTab === category ? (
    <li>
      <button className="button-image" type="button" onClick={onClickItem}>
        <img className="thumbnail-url" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  ) : null
}

export default ThumbnailImage
