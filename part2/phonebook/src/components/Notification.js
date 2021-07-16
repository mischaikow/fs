
const Notification = ({ message }) => {
  const noticeStyle = {
    color: 'green',
    background: 'lightgray',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }

  if (message === null) {
    return null
  }

  return (
    <div style={noticeStyle}>
      {message}
    </div>
  )
}

export default Notification
