echo "Using Node.js $(node --version)"

node -e 'process.exit(parseInt(process.versions.node, 10))' &> /dev/null
NODE_VERSION=$?
export NODE_OPTIONS='--conditions=browser --no-warnings --tls-cipher-list="DHE-RSA-AES128-GCM-SHA256 ECDHE-RSA-AES128-GCM-SHA256 DHE-RSA-AES256-GCM-SHA384 ECDHE-RSA-AES256-GCM-SHA384"'

if [[ $NODE_VERSION -eq 18 ]]; then
  export NODE_OPTIONS+=' --experimental-global-webcrypto'
elif [[ $NODE_VERSION -eq 16 ]]; then
  export NODE_OPTIONS+=' --experimental-global-webcrypto --experimental-fetch'
fi

if [[ $NODE_VERSION -lt 18 ]]; then
  export NODE_OPTIONS+=' --loader=tsx/esm'
else
  export NODE_OPTIONS+=' --import=tsx/esm'
fi
