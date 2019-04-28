# Signzy api doc (Clone of slate)

## Project overview
A modulated (made up of custom Vue.js components) api documentator

## Features
- Modular
- Resuable
- Responsive

## Gallery
[Go to Gallery](https://drive.google.com/drive/folders/1tFGV9fpkRbFJxeCudiek5tQDF5j6b_FX?usp=sharing)

## Demo Link
[Visit demo link](https://signzy-api-doc.firebaseapp.com/)

## Build Setup
```
# install dependencies & run on local server with hot reload at: localhost:8080
$ npm i
$ npm run dev
```

## Components
### HEADER Component
```
<AppHeader :text="Authentication"/>
```

### NORMAL TEXT Component
```
<AppNormalStr v-html="Welcome to the Kittn API! You can use our API to access Kittn API endpoints, which can get information on various cats, kittens, and breeds in our database.

                      We have language bindings in Shell, Ruby, Python, and JavaScript! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.

                      This example API documentation page was created with <a href="https://github.com/lord/slate">Slate</a>. Feel free to edit it and use it as a base for your own API's documentation. <span class="app-code-snippet">abc</span>"
/>
```

### CODE SNIPPET Component
```
<AppCodeSnippet code="Authorization: meowmeowmeow"/>
```

### HIGHLIGHT Component
```
<AppHighlight
  icon="https://img.icons8.com/metro/50/000000/info.png"
  :texts="[
            { type: "normal-str", value: "You must replace" },
            { type: "snippet", value: "meowmeowmeow" },
            { type: "normal-str", value: "with your personal API key." }
          ]"

  backgroundColor="#8fbcd4"
  htmlColor="#F3F7F9"
/>
```

### SUBHEADING Component
```
<AppSubHeading text="HTTP Request"/>
```

### TABLE Component
```
<App-table
  :headers="[
    { text: "Parameter", value: "parameter", sortable: false },
    { text: "Default", value: "default", sortable: false },
    {
      text: "Description",
      value: "description",
      sortable: false
    }
  ]"
  :items="[
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
  ]"
/>
```
