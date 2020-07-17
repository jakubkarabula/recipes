const authorization = (req, res, block) => {
  if (req.session.user) {
    return true
  } else if (block) {
    res.status(401).send('you need to login to perform this action')
  }

  return false
}

export default authorization
