/**
 * 悬浮在网页上的挂件
 */
module.exports = {
    THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // 是否显示切换主题按钮
    // Chatbase 是否显示chatbase机器人 https://www.chatbase.co/
    CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || null,
    // WebwhizAI 机器人 @see https://github.com/webwhiz-ai/webwhiz
    WEB_WHIZ_ENABLED: process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false, // 是否显示
    WEB_WHIZ_BASE_URL:
        process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || 'https://api.webwhiz.ai', // 可以自建服务器
    WEB_WHIZ_CHAT_BOT_ID: process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null, // 在后台获取ID
    DIFY_CHATBOT_ENABLED: process.env.NEXT_PUBLIC_DIFY_CHATBOT_ENABLED || false,
    DIFY_CHATBOT_BASE_URL: process.env.NEXT_PUBLIC_DIFY_CHATBOT_BASE_URL || '',
    DIFY_CHATBOT_TOKEN: process.env.NEXT_PUBLIC_DIFY_CHATBOT_TOKEN || '',

    // 悬浮挂件
    WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || true, // 是否显示宠物挂件
    WIDGET_PET_LINK:
        process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
        'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // 挂件模型地址 @see https://github.com/xiazeyu/live2d-widget-models
    WIDGET_PET_SWITCH_THEME:
        process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || true, // 点击宠物挂件切换博客主题

    SPOILER_TEXT_TAG: process.env.NEXT_PUBLIC_SPOILER_TEXT_TAG || '[sp]', // Spoiler文本隐藏功能，如Notion中 [sp]希望被spoiler的文字[sp]，填入[sp] 即可

    // 音乐播放插件
    MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || true, // 是否使用音乐播放插件
    MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 是否在左下角显示播放和切换，如果使用播放器，打开自动播放再隐藏，就会以类似背景音乐的方式播放，无法取消和暂停
    MUSIC_PLAYER_AUTO_PLAY:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // 是否自动播放，不过自动播放时常不生效（移动设备不支持自动播放）
    MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '1', // 歌词显示类型，可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）（前提是有配置歌词路径，对 meting 无效）
    MUSIC_PLAYER_CDN_URL:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
        'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
    MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // 默认播放方式，顺序 list，随机 random
    MUSIC_PLAYER_AUDIO_LIST: [
        // 示例音乐列表。除了以下配置外，还可配置歌词，具体配置项看此文档 https://aplayer.js.org/#/zh-Hans/
        {
            name: 'Minecraft-C418',
            artist: 'Daniel Rosenfeld',
            url: 'https://music.163.com/song/media/outer/url?id=4010201.mp3',
            cover:
                'https://p2.music.126.net/f23Ik50Hc6R69eKnImqXNw==/109951167552381622.jpg'
        },
        {
            name: 'on my way',
            artist: 'Alan Walker',
            url: 'https://music.163.com/song/media/outer/url?id=1353010122.mp3',
            cover:
                'https://wx3.sinaimg.cn/orj480/007d3rwnly1hqesuxvzyoj30dc0hq0ty.jpg',
            // lrc: 'lrc/lrc2.lrc'
        },
        {
            name: 'are you OK',
            artist: '雷军',
            url: 'https://music.163.com/song/media/outer/url?id=31814005.mp3',
            cover:
                'https://s21.ax1x.com/2025/01/09/pEC3g10.png',
            lrc: '[00:00.00] Are You OK - 雷军 [00:00.41][00:00.41] 词：Mr.Lemon [00:00.81][00:00.81] 曲：Lou Bega [00:01.22][00:01.22] 编曲：Mr.Lemon [00:01.73][00:01.73] Thank you [00:04.20] 谢谢 [00:04.20] Are you ok [00:05.45] 你还好吧？[00:05.45] Hello [00:06.55] 哈喽 [00:06.55] Thank you [00:07.51] 谢谢 [00:07.51] Thank you very much [00:09.44] 非常感谢 [00:09.44] Hello [00:10.38] 哈喽 [00:10.38] Thank you [00:11.27] 谢谢 [00:11.27] Thank you very much [00:12.81] 非常感谢 [00:12.81] He hello [00:14.13] 哈 哈喽 [00:14.13] Thank you [00:15.16] 谢谢 [00:15.16] Thank you very much [00:16.84] 非常感谢 [00:16.84] He he hello [00:17.98] 哈 哈喽 [00:17.98] Thank you [00:18.86] 谢谢 [00:18.86] Thank you very much [00:20.65] 非常感谢 [00:20.65] How are you Indian Mi fans [00:22.66] 印度的米粉你们好吗？[00:22.66] Do you like Mi 4i [00:24.79] 你们喜欢小米 4i 吗？[00:24.79] Ok Indian Mi fans [00:26.48] 印度的米粉们 [00:26.48] Do you like Mi band [00:28.52] 你们喜欢小米手带吗 [00:28.52] We will give everyone a free Mi band [00:32.26] 我们要给每个人一条小米手带（脸红）[00:32.26] And me [00:34.43] 还有我！[00:34.43] Mi fans [00:35.23] 米粉们 [00:35.23] Do you like [00:36.23] 你们喜欢（我）吗？[00:36.23] I'm very happy to [00:38.10] 我十分高兴 [00:38.10] To be an Indian [00:39.95] 能成为一个印度人（误）[00:39.95] I'm very happy to [00:42.00] 我十分高兴 [00:42.00] To be a gift [00:43.88] 能成为一个礼物（误）[00:43.88] I'm a free gift [00:45.94] 我是一个免费的礼物（误）[00:45.94] For every - everyone [00:48.06] 送给每个每个人 [00:48.06] Do you like me [00:49.54] 你们宣我嘛？（脸红）[00:49.54] Yeeeeeeeh [00:50.04][00:50.04] Thank you very much [00:51.37] 非常感谢 [00:51.37] Oh Indian Mi fans [00:52.43] 噢 印度的米粉们 [00:52.43] Are you ok [00:53.34] 你还好吧？[00:53.34] Are you ok [00:54.49] 你还好吧？[00:54.49] Yeeeeeeeh [00:55.14][00:55.14] Oh everyone [00:56.21] 噢 大家 [00:56.21] Are you ok [00:57.16] 你还好吧？[00:57.16] Are you ok [00:58.03] 你还好吧？[00:58.03] I I I I I I I mean [01:00.09] 我 我 我 我是说 [01:00.09] Are you ok [01:01.01] 你还好吧？[01:01.01] Are you ok [01:02.66] 你还好吧？[01:02.66] I'm very ok [01:06.51] 俺很好！[01:06.51] Oh Indian Mi fans [01:07.73] 噢 印度的米粉们 [01:07.73] Are you ok [01:08.67] 你还好吧？[01:08.67] Are you ok [01:10.31] 你还好吧？[01:10.31] Oh China Mi fans [01:11.60] 噢 中国米粉 [01:11.60] Are you ok [01:12.48] 你还好吧？[01:12.48] Are you ok [01:13.49] 你还好吧？[01:13.49] I I I I I I I mean [01:15.37] 我 我 我 我是说 [01:15.37] How are you [01:16.27] 你好嘛？[01:16.27] How are you [01:17.80] 你好嘛？[01:17.80] I'm fine thank you [01:21.11] 俺很好！谢谢 [01:21.11] Are you ok [01:22.33] 你还好吧？[01:22.33] Are you ok [01:23.76] 你还好吧？[01:23.76] We will give everyone a band [01:25.85] 我们要给每个人一条手带 [01:25.85] Are you ok [01:27.37] 你还好吧？[01:27.37] We will give a band to everyone [01:29.80] 我们要把手带给每个人 [01:29.80] Are you ok [01:31.15] 你还好吧？[01:31.15] We will give a colourful strap [01:33.81] 我们要送一条彩色带子 [01:33.81] All for free [01:35.35] 全免费！[01:35.35] I'm very happy ha happy [01:37.40] 我十分嗨皮 [01:37.40] Oh Indian Mi fans [01:38.45] 噢 印度的米粉们 [01:38.45] Are you ok [01:39.37] 你还好吧？[01:39.37] Are you ok [01:40.54] 你还好吧？[01:40.54] Yeeeeeeeh [01:41.25][01:41.25] Oh everyone [01:42.29] 噢 大家 [01:42.29] Are you ok [01:43.23] 你还好吧？[01:43.23] Are you ok [01:43.96] 你还好吧？[01:43.96] I I I I I I I mean [01:46.08] 我 我 我 我是说 [01:46.08] Are you ok [01:47.03] 你还好吧？[01:47.03] Are you ok [01:48.48] 你还好吧？[01:48.48] I'm very ok [01:51.84] 俺很好！[01:51.84] Once again [01:52.82] 再来一次！[01:52.82] Oh Indian Mi fans [01:53.79] 噢 印度的米粉们 [01:53.79] Are you ok [01:54.72] 你还好吧？[01:54.72] Are you ok [01:56.33] 你还好吧？[01:56.33] Oh China Mi fans [01:57.62] 噢 中国米粉 [01:57.62] Are you ok [01:58.54] 你还好吧？[01:58.54] Are you ok [01:59.33] 你还好吧？[01:59.33] I I I I I I I mean [02:01.50] 我 我 我 我是说 [02:01.50] How are you [02:02.37] 你好嘛？[02:02.37] How are you [02:03.87] 你好嘛？[02:03.87] I'm fine thank you [02:07.01] 俺很好！谢谢 [02:07.01] Are you ok [02:11.91] 你还好吧？'
        }
    ],
    MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // 是否要开启 MetingJS，从平台获取歌单。会覆盖自定义的 MUSIC_PLAYER_AUDIO_LIST，更多配置信息：https://github.com/metowolf/MetingJS
    MUSIC_PLAYER_METING_SERVER:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // 音乐平台，[netease, tencent, kugou, xiami, baidu]
    MUSIC_PLAYER_METING_ID:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // 对应歌单的 id
    MUSIC_PLAYER_METING_LRC_TYPE:
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // 已废弃！！！可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）

    // 一个小插件展示你的facebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
    FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 邊欄 Facebook Page widget 的標題欄，填''則無標題欄 e.g FACEBOOK 粉絲團'
    FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page 的連結 e.g https://www.facebook.com/tw.andys.pro
    FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 來啟用 messenger 聊天功能
    FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '' // Facebook App ID 來啟用 messenger 聊天功能 获取: https://developers.facebook.com/
}
