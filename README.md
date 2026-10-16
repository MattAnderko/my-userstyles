# my-userstyles

[Catppuccin](https://catppuccin.com) themes for sites I use, as [Stylus](https://github.com/openstyles/stylus) userstyles.

| Site | Install |
| --- | --- |
| Messenger / facebook.com/messages | [messenger.user.less](https://raw.githubusercontent.com/MattAnderko/my-userstyles/main/styles/messenger.user.less) |
| Outlook on the web | [outlook.user.less](https://raw.githubusercontent.com/MattAnderko/my-userstyles/main/styles/outlook.user.less) |
| Microsoft Teams (web) | [teams.user.less](https://raw.githubusercontent.com/MattAnderko/my-userstyles/main/styles/teams.user.less) |
| YouTube | [youtube.user.less](https://raw.githubusercontent.com/MattAnderko/my-userstyles/main/styles/youtube.user.less) |
| YouTube Music | [youtube-music.user.less](https://raw.githubusercontent.com/MattAnderko/my-userstyles/main/styles/youtube-music.user.less) |
| Google search, AI Overview and AI Mode | [google.user.less](https://raw.githubusercontent.com/MattAnderko/my-userstyles/main/styles/google.user.less) |
| ChatGPT | [chatgpt.user.less](https://raw.githubusercontent.com/MattAnderko/my-userstyles/main/styles/chatgpt.user.less) |

With Stylus installed, opening a link shows the install page. Installed styles update themselves from this
repo: Stylus checks each style's `@updateURL` and installs the new file when its `@version` is higher.

### Install all at once

Download [stylus-import.json](https://raw.githubusercontent.com/MattAnderko/my-userstyles/main/stylus-import.json)
(right click, save link as), then in Stylus open **Manage → Import** and pick the file. All styles are installed
with their default options and keep updating from this repo like individually installed ones.

## Flavour and accent

Each style has its options in Stylus (the cog next to the style): flavour (Latte, Frappé, Macchiato, Mocha) and
accent colour. Google and ChatGPT pick a light and a dark flavour and follow the system colour scheme; the
others use one flavour.

## Other themes

The Messenger, Outlook, Teams, YouTube and YouTube Music styles only use 26 colour variables
(`--ctp-base`, `--ctp-text`, `--ctp-surface0`, ... and `--ctp-accent`), set in the `#palette` mixin at the top
of each file. To use a non-Catppuccin theme, replace that mixin's body with your own colours for the same roles;
the comment at the top of each file explains what each role is for.

## Working on the styles

Once per clone:

```sh
git config core.hooksPath .githooks
npm install
```

On commit the hook raises the patch version of every changed style, so Stylus picks the change up, and
rebuilds `stylus-import.json` (`npm run bundle` does that by hand). Styles under
`google` and `chatgpt` are based on [catppuccin/userstyles](https://github.com/catppuccin/userstyles) (MIT).
