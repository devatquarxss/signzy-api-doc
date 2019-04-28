export default {
  data() {
    return {
      appApis: [
        // 1
        {
          doc: [
            {
              type: "header",
              value: "Introduction"
            },
            {
              type: "normal-str",
              value: `Welcome to the Kittn API! You can use our API to access Kittn API endpoints, which can get information on various cats, kittens, and breeds in our database.

We have language bindings in Shell, Ruby, Python, and JavaScript! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.

This example API documentation page was created with <a href="https://github.com/lord/slate">Slate</a>. Feel free to edit it and use it as a base for your own API's documentation. <span class="app-code-snippet">abc</span>`
            }
          ],
          showCode: false
        },
        // 2
        {
          doc: [
            {
              type: "header",
              value: "Authentication"
            },
            {
              type: "normal-str",
              value:
                'Kittn uses API keys to allow access to the API. You can register a new Kittn API key at our <a href="http://example.com/developers">developer portal.</a>\n' +
                "\n" +
                'Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:'
            },
            {
              type: "snippet",
              value: "Authorization: meowmeowmeow"
            },
            {
              type: "highlight",
              values: {
                icon: "https://img.icons8.com/metro/50/000000/info.png",
                texts: [
                  { type: "normal-str", value: "You must replace" },
                  { type: "snippet", value: "meowmeowmeow" },
                  { type: "normal-str", value: "with your personal API key." }
                ],
                backgroundColor: '#8fbcd4'
              }
            }
          ],
          code: {
            shell: "To authorize, use this code:\n" +
              "\n" +
              "# With shell, you can just pass the correct header with each request\n" +
              "curl \"api_endpoint_here\"\n" +
              "  -H \"Authorization: meowmeowmeow\"\n" +
              "Make sure to replace meowmeowmeow with your API key.",
            ruby: "To authorize, use this code:\n" +
              "\n" +
              "require 'kittn'\n" +
              "\n" +
              "api = Kittn::APIClient.authorize!('meowmeowmeow')\n" +
              "Make sure to replace meowmeowmeow with your API key.",
            python: "To authorize, use this code:\n" +
              "\n" +
              "import kittn\n" +
              "\n" +
              "api = kittn.authorize('meowmeowmeow')\n" +
              "Make sure to replace meowmeowmeow with your API key.",
            javascript: "To authorize, use this code:\n" +
              "\n" +
              "const kittn = require('kittn');\n" +
              "\n" +
              "let api = kittn.authorize('meowmeowmeow');\n" +
              "Make sure to replace meowmeowmeow with your API key.",
          },
          showCode: true
        },
        {
          doc: [
            {
              type: "header",
              value: "Get All Kittens"
            },
            {
              type: "normal-str",
              value: "This endpoint retrieves all kittens."
            },
            {
              type: "subheading",
              value: "HTTP Request"
            },
            {
              type: "snippet",
              value: "GET http://example.com/api/kittens"
            },
            {
              type: "subheading",
              value: "Query Parameters"
            },
            {
              type: "table",
              values: {
                headers: [
                  { text: "Parameter", value: "parameter", sortable: false },
                  { text: "Default", value: "default", sortable: false },
                  {
                    text: "Description",
                    value: "description",
                    sortable: false
                  }
                ],
                items: [
                  {
                    parameter: "include_cats",
                    default: "false",
                    description:
                      "If set to true, the result will also include cats."
                  },
                  {
                    parameter: "available",
                    default: "true",
                    description:
                      "If set to false, the result will include kittens that have already been adopted."
                  }
                ]
              }
            },
            {
              type: 'highlight',
              values: {
                icon: "https://img.icons8.com/metro/50/000000/ok.png",
                texts: [
                  { type: "normal-str", value: "Remember — a happy kitten is an authenticated kitten!" },
                ],
                backgroundColor: '#6ac174'
              }
            }
          ],
          code: {
            shell: "curl \"http://example.com/api/kittens\"\n" +
              "  -H \"Authorization: meowmeowmeow\"\n" +
              "The above command returns JSON structured like this:\n" +
              "\n" +
              "[\n" +
              "  {\n" +
              "    \"id\": 1,\n" +
              "    \"name\": \"Fluffums\",\n" +
              "    \"breed\": \"calico\",\n" +
              "    \"fluffiness\": 6,\n" +
              "    \"cuteness\": 7\n" +
              "  },\n" +
              "  {\n" +
              "    \"id\": 2,\n" +
              "    \"name\": \"Max\",\n" +
              "    \"breed\": \"unknown\",\n" +
              "    \"fluffiness\": 5,\n" +
              "    \"cuteness\": 10\n" +
              "  }\n" +
              "]",
            ruby: "require 'kittn'\n" +
              "\n" +
              "api = Kittn::APIClient.authorize!('meowmeowmeow')\n" +
              "api.kittens.get\n" +
              "The above command returns JSON structured like this:\n" +
              "\n" +
              "[\n" +
              "  {\n" +
              "    \"id\": 1,\n" +
              "    \"name\": \"Fluffums\",\n" +
              "    \"breed\": \"calico\",\n" +
              "    \"fluffiness\": 6,\n" +
              "    \"cuteness\": 7\n" +
              "  },\n" +
              "  {\n" +
              "    \"id\": 2,\n" +
              "    \"name\": \"Max\",\n" +
              "    \"breed\": \"unknown\",\n" +
              "    \"fluffiness\": 5,\n" +
              "    \"cuteness\": 10\n" +
              "  }\n" +
              "]",
            python: "import kittn\n" +
              "\n" +
              "api = kittn.authorize('meowmeowmeow')\n" +
              "api.kittens.get()\n" +
              "The above command returns JSON structured like this:\n" +
              "\n" +
              "[\n" +
              "  {\n" +
              "    \"id\": 1,\n" +
              "    \"name\": \"Fluffums\",\n" +
              "    \"breed\": \"calico\",\n" +
              "    \"fluffiness\": 6,\n" +
              "    \"cuteness\": 7\n" +
              "  },\n" +
              "  {\n" +
              "    \"id\": 2,\n" +
              "    \"name\": \"Max\",\n" +
              "    \"breed\": \"unknown\",\n" +
              "    \"fluffiness\": 5,\n" +
              "    \"cuteness\": 10\n" +
              "  }\n" +
              "]",
            javascript: "const kittn = require('kittn');\n" +
              "\n" +
              "let api = kittn.authorize('meowmeowmeow');\n" +
              "let kittens = api.kittens.get();\n" +
              "The above command returns JSON structured like this:\n" +
              "\n" +
              "[\n" +
              "  {\n" +
              "    \"id\": 1,\n" +
              "    \"name\": \"Fluffums\",\n" +
              "    \"breed\": \"calico\",\n" +
              "    \"fluffiness\": 6,\n" +
              "    \"cuteness\": 7\n" +
              "  },\n" +
              "  {\n" +
              "    \"id\": 2,\n" +
              "    \"name\": \"Max\",\n" +
              "    \"breed\": \"unknown\",\n" +
              "    \"fluffiness\": 5,\n" +
              "    \"cuteness\": 10\n" +
              "  }\n" +
              "]"
          },
          showCode: true
        },
        {
          doc: [
            { type: 'header', value: 'Get a Specific Kitten' },
            { type: 'normal-str', value: 'This endpoint retrieves a specific kitten.' },
            {
              type: 'highlight',
              values: {
                icon: "https://img.icons8.com/ios/50/000000/box-important-filled.png",
                texts: [
                  { type: "normal-str", value: "Inside HTML code blocks like this one, you can't use Markdown, so use" },
                  { type: "snippet", value: "<code>" },
                  { type: "normal-str", value: "blocks to denote code." },
                ],
                backgroundColor: '#c97a7e'
              }
            },
            {
              type: "subheading",
              value: "HTTP Request"
            },
            {
              type: "snippet",
              value: "GET http://example.com/kittens/<ID>"
            },
            {
              type: "subheading",
              value: "URL Parameters"
            },
            {
              type: "table",
              values: {
                headers: [
                  { text: "Parameter", value: "parameter", sortable: false },
                  { text: "Description", value: "description", sortable: false }
                ],
                items: [
                  {
                    parameter: "ID",
                    description:
                      "The ID of the kitten to retrieve"
                  }
                ]
              }
            },
          ],
          code: {
            shell: "curl \"http://example.com/api/kittens/2\"\n" +
              "  -H \"Authorization: meowmeowmeow\"\n" +
              "The above command returns JSON structured like this:\n" +
              "\n" +
              "{\n" +
              "  \"id\": 2,\n" +
              "  \"name\": \"Max\",\n" +
              "  \"breed\": \"unknown\",\n" +
              "  \"fluffiness\": 5,\n" +
              "  \"cuteness\": 10\n" +
              "}",
            ruby: "require 'kittn'\n" +
              "\n" +
              "api = Kittn::APIClient.authorize!('meowmeowmeow')\n" +
              "api.kittens.get(2)\n" +
              "The above command returns JSON structured like this:\n" +
              "\n" +
              "{\n" +
              "  \"id\": 2,\n" +
              "  \"name\": \"Max\",\n" +
              "  \"breed\": \"unknown\",\n" +
              "  \"fluffiness\": 5,\n" +
              "  \"cuteness\": 10\n" +
              "}",
            python: "import kittn\n" +
              "\n" +
              "api = kittn.authorize('meowmeowmeow')\n" +
              "api.kittens.get(2)\n" +
              "The above command returns JSON structured like this:\n" +
              "\n" +
              "{\n" +
              "  \"id\": 2,\n" +
              "  \"name\": \"Max\",\n" +
              "  \"breed\": \"unknown\",\n" +
              "  \"fluffiness\": 5,\n" +
              "  \"cuteness\": 10\n" +
              "}",
            javascript: "const kittn = require('kittn');\n" +
              "\n" +
              "let api = kittn.authorize('meowmeowmeow');\n" +
              "let max = api.kittens.get(2);\n" +
              "The above command returns JSON structured like this:\n" +
              "\n" +
              "{\n" +
              "  \"id\": 2,\n" +
              "  \"name\": \"Max\",\n" +
              "  \"breed\": \"unknown\",\n" +
              "  \"fluffiness\": 5,\n" +
              "  \"cuteness\": 10\n" +
              "}",
          },
          showCode: true
        },
        {
          doc: [
            { type: 'header', value: 'Delete a Specific Kitten' },
            { type: 'normal-str', value: 'This endpoint deletes a specific kitten.' },
            {
              type: "subheading",
              value: "HTTP Request"
            },
            {
              type: "snippet",
              value: "DELETE http://example.com/kittens/<ID>"
            },
            {
              type: "subheading",
              value: "URL Parameters"
            },
            {
              type: "table",
              values: {
                headers: [
                  { text: "Parameter", value: "parameter", sortable: false },
                  { text: "Description", value: "description", sortable: false }
                ],
                items: [
                  {
                    parameter: "ID",
                    description:
                      "The ID of the kitten to retrieve"
                  }
                ]
              }
            },
          ],
          code: {
            shell: "curl \"http://example.com/api/kittens/2\"\n" +
              "  -X DELETE\n" +
              "  -H \"Authorization: meowmeowmeow\"\n" +
              "The above command returns JSON structured like this:\n" +
              "\n" +
              "{\n" +
              "  \"id\": 2,\n" +
              "  \"deleted\" : \":(\"\n" +
              "}",
            ruby: "require 'kittn'\n" +
              "\n" +
              "api = Kittn::APIClient.authorize!('meowmeowmeow')\n" +
              "api.kittens.delete(2)\n" +
              "The above command returns JSON structured like this:\n" +
              "\n" +
              "{\n" +
              "  \"id\": 2,\n" +
              "  \"deleted\" : \":(\"\n" +
              "}",
            python: "import kittn\n" +
              "\n" +
              "api = kittn.authorize('meowmeowmeow')\n" +
              "api.kittens.delete(2)\n" +
              "The above command returns JSON structured like this:\n" +
              "\n" +
              "{\n" +
              "  \"id\": 2,\n" +
              "  \"deleted\" : \":(\"\n" +
              "}",
            javascript: "const kittn = require('kittn');\n" +
              "\n" +
              "let api = kittn.authorize('meowmeowmeow');\n" +
              "let max = api.kittens.delete(2);\n" +
              "The above command returns JSON structured like this:\n" +
              "\n" +
              "{\n" +
              "  \"id\": 2,\n" +
              "  \"deleted\" : \":(\"\n" +
              "}"
          },
          showCode: true
        },
        {
          doc: [
            { type: 'header', value: 'Errors' },
            {
              type: "highlight",
              values: {
                icon: "https://img.icons8.com/metro/50/000000/info.png",
                texts: [
                  { type: "normal-str", value: "This error section is stored in a separate file in" },
                  { type: "snippet", value: "includes/_errors.md" },
                  { type: "normal-str", value: "Slate allows you to optionally separate out your docs into many files...just save them to the" },
                  { type: "snippet", value: "includes" },
                  { type: "normal-str", value: " folder and add them to the top of your " },
                  { type: "snippet", value: "index.md" },
                  { type: "normal-str", value: " 's frontmatter. Files are included in the order listed. " },
                ],
                backgroundColor: '#8fbcd4'
              }
            },
            { type: 'normal-str', value: 'The Kittn API uses the following error codes:' },
            {
              type: "table",
              values: {
                headers: [
                  { text: "Error Code", value: "errcode", sortable: false },
                  { text: "Meaning", value: "meaning", sortable: false }
                ],
                items: [
                  { errcode: "400", meaning: "Bad Request -- Your request is invalid." },
                  { errcode: "401", meaning: "Unauthorized -- Your API key is wrong." },
                  { errcode: "403", meaning: "Forbidden -- The kitten requested is hidden for administrators only." },
                  { errcode: "404", meaning: "Not Found -- The specified kitten could not be found." },
                  { errcode: "405", meaning: "Method Not Allowed -- You tried to access a kitten with an invalid method." },
                  { errcode: "406", meaning: "Not Acceptable -- You requested a format that isn't json." },
                  { errcode: "410", meaning: "Gone -- The kitten requested has been removed from our servers." },
                  { errcode: "418", meaning: "I'm a teapot." },
                  { errcode: "429", meaning: "Too Many Requests -- You're requesting too many kittens! Slow down!" },
                  { errcode: "500", meaning: "Internal Server Error -- We had a problem with our server. Try again later." },
                  { errcode: "503", meaning: "Service Unavailable -- We're temporarily offline for maintenance. Please try again later." }
                ]
              }
            }
          ],
          showCode: false
        }
      ]
    };
  }
};
