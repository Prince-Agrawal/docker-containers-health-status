const COMMAND = 'curl -XGET --unix-socket /var/run/docker.sock http://localhost/containers/json?all=1'

module.exports = { COMMAND }