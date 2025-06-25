module.exports = {
    humanitixApi: {
      input: './openapi/humanitix-openapi.json',
      output: {
        target: 'app/pages/humanitix', 
        client: 'fetch',          
        mode: 'tags-split',       
        mock: false,
      },
    },
  };
  