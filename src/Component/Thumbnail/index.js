import './index.css'

const Thumbnail = props => {
  const {tabDetails, activeTab, changeTab} = props
  const {tabId, displayText} = tabDetails
  const classNameText = activeTab === tabId ? 'tab-Item-active' : 'tab-Item'

  const onClickTab = () => {
    changeTab(tabId)
  }

  return (
    <button type="button" className={classNameText} onClick={onClickTab}>
      {displayText}
    </button>
  )
}

export default Thumbnail
