addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const responseTemplate = `
<!DOCTYPE html>
<html>
<head>
  <title>Current IP Check</title>
</head>

<body>Current IP Address: ##IP_ADDRESS##</body>
</html>`

/**
 * Fetch and return response with IP Address
 * @param {Request} request
 */
async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }

  clientIP = request.headers.get('CF-Connecting-IP')
  responseHTML = responseTemplate.replace('##IP_ADDRESS##', clientIP)

  return new Response(responseHTML, init)
}
