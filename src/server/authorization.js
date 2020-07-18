const authorization = (req, res, block) => {
  if (req.session.user) {
    return true
  } else if (block) {
    return res
      .status(401)
      .send({ error: 'you need to login to perform this action' })
  }

  return false
}

export default authorization
