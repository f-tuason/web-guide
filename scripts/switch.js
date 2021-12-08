mybutton = document.getElementById("to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function to_top() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function copy_to_cb(text) {
  var input = document.createElement("textarea");
  input.innerHTML = text;
  document.body.appendChild(input);
  input.select();
  var result = document.execCommand("copy");
  document.body.removeChild(input);
}

function clr() {
  $(".opt-1").css("margin-top", 0);
  $(".opt-2").css("margin-top", 0);
  $(".opt-3").css("margin-top", 0);
  $(".opt-4").css("margin-top", 0);
  $(".opt-5").css("margin-top", 0);
  $(".opt-6").css("margin-top", 0);
  $(".opt-7").css("margin-top", 0);
  $(".opt-8").css("margin-top", 0);
  $(".opt-9").css("margin-top", 0);
  $(".opt-10").css("margin-top", 0);
  $(".opt-11").css("margin-top", 0);
  $(".opt-12").css("margin-top", 0);
  $(".opt-13").css("margin-top", 0);
  $(".opt-14").css("margin-top", 0);
  $(".opt-1").html("");
  $(".opt-2").html("");
  $(".opt-3").html("");
  $(".opt-4").html("");
  $(".opt-5").html("");
  $(".opt-6").html("");
  $(".opt-7").html("");
  $(".opt-8").html("");
  $(".opt-9").html("");
  $(".opt-10").html("");
  $(".opt-11").html("");
  $(".opt-12").html("");
  $(".opt-13").html("");
  $(".opt-14").html("");
}

function cpy_git(tag) {
  switch (tag) {
    case "git_init":
      desc = "git init";
      break;
    case "git_clone":
      desc = "git clone _";
      break;
    case "git_fetch":
      desc = "git fetch _";
      break;
    case "git_add":
      desc = "git add _";
      break;
    case "git_commit":
      desc = "git commit _";
      break;
    case "git_push":
      desc = "git push _";
      break;
    case "git_pull":
      desc = "git pull _";
      break;
    case "git_status":
      desc = "git status";
      break;
    case "git_list_branch":
      desc = "git branch";
      break;
    case "git_create_branch":
      desc = "git branch _";
      break;
    case "git_checkout":
      desc = "git checkout _";
      break;
    case "git_checkout_alt":
      desc = "git checkout -b _";
      break;
    case "git_branch_d":
      desc = "git branch -d _";
      break;
    case "git_branch_m":
      desc = "git branch -m _";
      break;
    case "git_merge":
      desc = "git merge _";
      break;
  }

  copy_to_cb(desc);
}

function cpy_htm(tag) {
  var maintag = "";
  switch (tag) {
    case "cmt":
      maintag = "<!-- _ -->";
      break;
    case "a":
      maintag = '<a href="#"|></a>';
      break;
    case "abbr":
      maintag = '<abbr title="#"|>_</abbr>';
      break;
    case "acronym":
      maintag = "<acronym|></acronym";
      break;
    case "address":
      maintag = "<address|></address>";
      break;
    case "applet":
      maintag = "<applet|></applet>";
      break;
    case "area":
      maintag = '<area shape="_" coords="_" href="_" alt="_"|>';
      break;
    case "article":
      maintag = "<article|></article>";
      break;
    case "aside":
      maintag = "<aside|></aside>";
      break;
    case "audio":
      maintag =
        "<audio controls|>Your browser does not support the audio tag.</audio>";
      break;
    case "b":
      maintag = "<b|></b>";
      break;
    case "base":
      maintag = '<base href="_" target="_blank">';
      break;
    case "basefont":
      maintag = "<basefont></basefont>";
      break;
    case "bdi":
      maintag = "<bdi|></bdi>";
      break;
    case "bdo":
      maintag = "<bdi|></bdi>";
      break;
    case "big":
      maintag = "<big></big>";
      break;
    case "blockquote":
      maintag = '<blockquote cite="_"|></blockquote>';
      break;
    case "br":
      maintag = "<br|>";
      break;
    case "button":
      maintag = "<button|></button>";
      break;
    case "canvas":
      maintag =
        "<canvas>Your browser does not support the canvas tag.</canvas>";
      break;
    case "caption":
      maintag = "<caption|></caption>";
      break;
    case "center":
      maintag = "<center></center>";
      break;
    case "cite":
      maintag = "<cite|></cite>";
      break;
    case "code":
      maintag = "<code|></code>";
      break;
    case "col":
      maintag = "<col|>";
      break;
    case "colgroup":
      maintag = "<colgroup|></colgroup>";
      break;
    case "data":
      maintag = '<data value="_"|></data>';
      break;
    case "datalist":
      maintag = "<datalist|></datalist>";
      break;
    case "dd":
      maintag = "<dd|></dd>";
      break;
    case "del":
      maintag = "<del|></del>";
      break;
    case "details":
      maintag = "<details|></details>";
      break;
    case "dfn":
      maintag = "<dfn|><dfn>";
      break;
    case "dialog":
      maintag = "<dialog open|></dialog>";
      break;
    case "dir":
      maintag = "<dir></dir>";
      break;
    case "div":
      maintag = "<div|></div>";
      break;
    case "dl":
      maintag = "<dl|></dl>";
      break;
    case "dt":
      maintag = "<dt|></dt>";
      break;
    case "em":
      maintag = "<em|></em>";
      break;
    case "embed":
      maintag = '<embed type="image/jpg" src="_" width="_" height="_"|>';
      break;
    case "fieldset":
      maintag = "<fieldset|></fieldset>";
      break;
    case "figcaption":
      maintag = "<figcaption|></figcaption>";
      break;
    case "figure":
      maintag = "<figure|></figure>";
      break;
    case "font":
      maintag = "<font></font>";
      break;
    case "footer":
      maintag = "<footer|><footer>";
      break;
    case "form":
      maintag = '<form action="_" method="_"|></form>';
      break;
    case "frame":
      maintag = "<frame></frame>";
      break;
    case "frameset":
      maintag = "<frameset></frameset>";
      break;
    case "h1":
      maintag = "<h1|></h1>";
      break;
    case "h2":
      maintag = "<h2|></h2>";
      break;
    case "h3":
      maintag = "<h3|></h3>";
      break;
    case "h4":
      maintag = "<h4|></h4>";
      break;
    case "h5":
      maintag = "<h5|></h5>";
      break;
    case "h6":
      maintag = "<h6|></h6>";
      break;
    case "header":
      maintag = "<header|></header>";
      break;
    case "hr":
      maintag = "<hr|>";
      break;
    case "i":
      maintag = "<i|><i>";
      break;
    case "iframe":
      maintag = '<iframe src="_" title="_"|></iframe>';
      break;
    case "img":
      maintag = '<img src="_" alt="_" width="_"| />';
      break;
    case "input":
      maintag = "";
      break;
    case "ins":
      maintag = "<ins|></ins>";
      break;
    case "kbd":
      maintag = "<kbd|></kbd>";
      break;
    case "label":
      maintag = '<label for="_"|></label>';
      break;
    case "legend":
      maintag = "<legend|></legend>";
      break;
    case "li":
      maintag = "<li|></li>";
      break;
    case "link":
      maintag = '<link rel="stylesheet" href="_">';
      break;
    case "main":
      maintag = "<main|></main>";
      break;
    case "map":
      maintag = "<map|></map>";
      break;
    case "mark":
      maintag = "<mark></mark>";
      break;
    case "meta":
      maintag = '<meta name="_" content="_">';
      break;
    case "meter":
      maintag = '<meter value="_" min="_" max="_"|></meter>';
      break;
    case "nav":
      maintag = "<nav|></nav>";
      break;
    case "noframes":
      maintag = "<noframes></noframes>";
      break;
    case "noscript":
      maintag =
        "<noscript|>Your browser does not support JavaScript!</noscript>";
      break;
    case "object":
      maintag = '<object data="_" width="_"|></object>';
      break;
    case "ol":
      maintag = "<ol|></ol>";
      break;
    case "optgroup":
      maintag = '<optgroup label="_"|>';
      break;
    case "option":
      maintag = '<option value="_"|></option>';
      break;
    case "output":
      maintag = '<output name="_" for="_"|></output>';
      break;
    case "p":
      maintag = "<p|></p>";
      break;
    case "param":
      maintag = '<param name="_" value="_">';
      break;
    case "picture":
      maintag = "<picture|></picture>";
      break;
    case "pre":
      maintag = "<pre|></pre>";
      break;
    case "progress":
      maintag = '<progress value="_" max="_"|></progress>';
      break;
    case "q":
      maintag = "<q|></q>";
      break;
    case "rp":
      maintag = "<rp|></rp>";
      break;
    case "rt":
      maintag = "<rt|></rt>";
      break;
    case "ruby":
      maintag = "<ruby|></ruby>";
      break;
    case "s":
      maintag = "<s|></s>";
      break;
    case "samp":
      maintag = "<samp|></samp>";
      break;
    case "script":
      maintag = "<script|></script>";
      break;
    case "section":
      maintag = "<section|></section>";
      break;
    case "select":
      maintag = "<select|></select>";
      break;
    case "small":
      maintag = "<small|></small>";
      break;
    case "source":
      maintag = '<source src="_" type="_"|>';
      break;
    case "span":
      maintag = "<span|></span>";
      break;
    case "strike":
      maintag = "<strike></strike>";
      break;
    case "strong":
      maintag = "<strong|></strong>";
      break;
    case "style":
      maintag = "<style|></style>";
      break;
    case "sub":
      maintag = "<sub|></sub>";
      break;
    case "summary":
      maintag = "<summary|></summary>";
      break;
    case "sup":
      maintag = "<sup|></sup>";
      break;
    case "svg":
      maintag = '<svg width="_" height="_"|></svg>';
      break;
    case "table":
      maintag = "<table|></table>";
      break;
    case "tbody":
      maintag = "<tbody|></tbody>";
      break;
    case "td":
      maintag = "<td|></td>";
      break;
    case "tr":
      maintag = "<tr|></tr>";
      break;
    case "template":
      maintag = "<template|></template>";
      break;
    case "textarea":
      maintag = '<textarea rows="_" cols="_"|></textarea>';
      break;
    case "tfoot":
      maintag = "<tfoot|></tfoot>";
      break;
    case "th":
      maintag = "<th|></th>";
      break;
    case "thead":
      maintag = "<thead|></thead>";
      break;
    case "time":
      maintag = "<time|></time>";
      break;
    case "track":
      maintag = '<track src="_" kind="_" srclang="en" label="English">';
      break;
    case "tt":
      maintag = "<tt|></tt>";
      break;
    case "u":
      maintag = "<u|></u>";
      break;
    case "ul":
      maintag = "<ul|></ul>";
      break;
    case "var":
      maintag = "<var|></var>";
      break;
    case "video":
      maintag =
        '<video width="_" height="_" controls>Your browser does not support the video tag.</video>';
      break;
    case "wbr":
      maintag = "<wbr|><wbr>";
      break;
  }

  maintag = maintag.replace("|", "");
  copy_to_cb(maintag);
}

function cpy_frm(tag) {
  var maintag = "";

  switch (tag) {
    case "itext":
      maintag = '<input type="text" name=""|>';
      break;
    case "ipass":
      maintag = '<input type="pass" name=""|>';
      break;
    case "ichkbx":
      maintag = '<input type="checkbox" name=""|>';
      break;
    case "iradio":
      maintag = '<input type="radio" name=""|>';
      break;
    case "icolor":
      maintag = '<input type="color" name=""|>';
      break;
    case "idate":
      maintag = '<input type="idate" name=""|>';
      break;
    case "idtloc":
      maintag = '<input type="datetime-local" name=""|>';
      break;
    case "iemail":
      maintag = '<input type="email" name=""|>';
      break;
    case "ifile":
      maintag = '<input type="file" name=""|>';
      break;
    case "ihidden":
      maintag = '<input type="hidden" name=""|>';
      break;
    case "imonth":
      maintag = '<input type="month" name=""|>';
      break;
    case "inumber":
      maintag = '<input type="number" name=""|>';
      break;
    case "irange":
      maintag = '<input type="range" name=""|>';
      break;
    case "ireset":
      maintag = '<input type="reset" name=""|>';
      break;
    case "isubmit":
      maintag = '<input type="submit" name=""|>';
      break;
    case "isearch":
      maintag = '<input type="search" name=""|>';
      break;
    case "itel":
      maintag = '<input type="tel" name=""|>';
      break;
    case "itime":
      maintag = '<input type="time" name=""|>';
      break;
    case "iurl":
      maintag = '<input type="url" name=""|>';
      break;
    case "iweek":
      maintag = '<input type="week" name=""|>';
      break;
    case "form":
      maintag = '<form action="#" method="_"|></form>';
      break;
    case "textarea":
      maintag = '<textarea rows="#" cols="_"|></textarea>';
      break;
    case "button":
      maintag = "<button></button>";
      break;
    case "select":
      maintag = "<select></select>";
      break;
    case "optgroup":
      maintag = "<optgroup></optgroup>";
      break;
    case "option":
      maintag = "<option></option>";
      break;
    case "fieldset":
      maintag = "<fieldset></fieldset>";
      break;
    case "legend":
      maintag = "<legend></legend>";
    case "datalist":
      maintag =
        '<input list="browsers"><datalist id="browsers"><option value="_"></datalist>';
      break;
    case "output":
      maintag = "<output></output>";
      break;
  }

  maintag = maintag.replace("|", "");
  copy_to_cb(maintag);
}

function cpy_css(tag) {
  var maintag = "";

  switch (tag) {
    case "tag_sel":
      maintag = "_ {}";
      break;
    case "id_sel":
      maintag = "#_ {}";
      break;
    case "cls_sel":
      maintag = "._ {}";
      break;
    case "univ":
      maintag = "* {}";
      break;
    case "multi":
      maintag = "_, _ {}";
      break;
    case "descendant":
      maintag = "_ _ {}";
      break;
    case "child":
      maintag = "_ > _ {}";
      break;
    case "adj_sib":
      maintag = "_ + _ {}";
      break;
    case "gen_sib":
      maintag = "_ ~ _ {}";
      break;
    case "a_link":
      maintag = "a:link {}";
      break;
    case "a_vis":
      maintag = "a:visited {}";
      break;
    case "a_hov":
      maintag = "a:hover {}";
      break;
    case "a_act":
      maintag = "a:active {}";
      break;
    case "1st_let":
      maintag = "_::first-letter {}";
      break;
    case "1st_line":
      maintag = "_::first-line {}";
      break;
    case "attr":
      maintag = "[_] {}";
      break;
    case "attr_val":
      maintag = '[_ = "_"] {}';
      break;
    case "attr_val2":
      maintag = '[_ |= "_"] {}';
      break;
    case "attr_val3":
      maintag = '[_ ^= "_"] {}';
      break;
    case "attr_val4":
      maintag = '[_ $= "_"] {}';
      break;
    case "attr_val5":
      maintag = '[_ ~= "_"] {}';
      break;
    case "attr_val6":
      maintag = '[_ *= "_"] {}';
      break;
    case "univ_reset":
      maintag = '* { margin: "0"; padding: "0"; box-sizing: "border-box"; }';
      break;
    case "clearfix":
      maintag = '.clearfix:after { content: ""; clear: both; display: table; }';
      break;
  }

  copy_to_cb(maintag);
}

function omm(tag, opt) {
  var desc = "";
  switch (tag) {
    case "cmt":
      desc =
        "The comment tag is used to insert comments in the source code. Comments are not displayed in the browsers.<br />You can use comments to explain your code, which can help you when you edit the source code at a later date.<br />This is especially useful if you have a lot of code.";
      break;
    case "ahref":
      desc =
        "The &lt;a&gt; tag defines a hyperlink, which is used to link from one page to another.<br />The most important attribute of the &lt;a&gt; element is the href attribute, which indicates the link's destination.";
      break;
    case "abbr":
      desc =
        "The &lt;abbr&gt; tag defines an abbreviation or an acronym, like 'HTML', 'CSS', 'Mr.', 'Dr.', 'ASAP', 'ATM'.<br />Tip: Use the global title attribute to show the description for the abbreviation/acronym when you mouse over the element.";
      break;
    case "addr":
      desc =
        "The &lt;address&gt; tag defines the contact information for the author/owner of a document or an article.<br />The contact information can be an email address, URL, physical address, phone number, social media handle, etc.<br />The text in the &lt;address&gt; element usually renders in italic, and browsers will always add a line break before and after the &lt;address&gt; element.";
      break;
    case "area":
      desc =
        "The &lt;area&gt; tag defines an area inside an image map (an image map is an image with clickable areas).<br />&lt;area&gt; elements are always nested inside a &lt;map&gt; tag.<br />Note: The usemap attribute in &lt;img&gt; is associated with the &lt;map&gt; element's name attribute, and creates a relationship between the image and the map.";
      break;
    case "article":
      desc =
        "The &lt;article&gt; tag specifies independent, self-contained content.<br />An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.<br />Potential sources for the &lt;article&gt; element: Forum post, Blog post, News story";
      break;
    case "aside":
      desc =
        "The &lt;aside&gt; tag defines some content aside from the content it is placed in.<br />The aside content should be indirectly related to the surrounding content.<br />Tip: The &lt;aside&gt; content is often placed as a sidebar in a document.<br />Note: The &lt;aside&gt; element does not render as anything special in a browser. However, you can use CSS to style the &lt;aside&gt; element (see example below).";
      break;
    case "audio":
      desc =
        "The &lt;audio&gt; tag is used to embed sound content in a document, such as music or other audio streams.<br />The &lt;audio&gt; tag contains one or more &lt;source&gt; tags with different audio sources. The browser will choose the first source it supports.<br />The text between the &lt;audio&gt; and &lt;/audio&gt; tags will only be displayed in browsers that do not support the &lt;audio&gt; element.<br />There are three supported audio formats in HTML: MP3, WAV, and OGG.";
      break;
    case "b":
      desc =
        "The &lt;b&gt; tag specifies bold text without any extra importance.";
      break;
    case "base":
      desc =
        "The &lt;base&gt; tag specifies the base URL and/or target for all relative URLs in a document.<br />The &lt;base&gt; tag must have either an href or a target attribute present, or both.<br />There can only be one single &lt;base&gt; element in a document, and it must be inside the &lt;head&gt; element.";
      break;
    case "bdi":
      desc =
        "BDI stands for Bi-Directional Isolation.<br />The &lt;bdi&gt; tag isolates a part of text that might be formatted in a different direction from other text outside it.<br />This element is useful when embedding user-generated content with an unknown text direction.";
      break;
    case "bdo":
      desc =
        "BDO stands for Bi-Directional Override.<br />The &lt;bdo&gt; tag is used to override the current text direction.";
      break;
    case "blockquote":
      desc =
        "The &lt;blockquote&gt; tag specifies a section that is quoted from another source.<br />Browsers usually indent &lt;blockquote&gt; elements (look at example below to see how to remove the indentation).";
      break;
    case "body":
      desc =
        "The &lt;body&gt; tag defines the document's body.<br />The &lt;body&gt; element contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.<br />Note: There can only be one &lt;body&gt; element in an HTML document.";
      break;
    case "br":
      desc =
        "The &lt;br&gt; tag inserts a single line break.<br />The &lt;br&gt; tag is useful for writing addresses or poems.<br />The &lt;br&gt; tag is an empty tag which means that it has no end tag.";
      break;
    case "button":
      desc =
        "The &lt;button&gt; tag defines a clickable button.<br />Inside a &lt;button&gt; element you can put text (and tags like &lt;i&gt;, &lt;b&gt;, &lt;strong&gt;, &lt;br&gt;, &lt;img&gt;, etc.). That is not possible with a button created with the &lt;input&gt; element!<br />Tip: Always specify the type attribute for a &lt;button&gt; element, to tell browsers what type of button it is.<br />Tip: You can easily style buttons with CSS! Look at the examples below or visit our CSS Buttons tutorial.";
      break;
    case "canvas":
      desc =
        "The &lt;canvas&gt; tag is used to draw graphics, on the fly, via scripting (usually JavaScript).<br />The &lt;canvas&gt; tag is transparent, and is only a container for graphics, you must use a script to actually draw the graphics.<br />Any text inside the &lt;canvas&gt; element will be displayed in browsers with JavaScript disabled and in browsers that do not support &lt;canvas&gt;.";
      break;
    case "caption":
      desc =
        "The &lt;caption&gt; tag defines a table caption.<br />The &lt;caption&gt; tag must be inserted immediately after the &lt;table&gt; tag.<br />Tip: By default, a table caption will be center-aligned above a table. However, the CSS properties text-align and caption-side can be used to align and place the caption.";
      break;
    case "cite":
      desc =
        "The &lt;cite&gt; tag defines the title of a creative work (e.g. a book, a poem, a song, a movie, a painting, a sculpture, etc.).<br />Note: A person's name is not the title of a work.<br />The text in the &lt;cite&gt; element usually renders in italic.";
      break;
    case "code":
      desc =
        "The &lt;code&gt; tag is used to define a piece of computer code. The content inside is displayed in the browser's default monospace font.<br />Tip: This tag is not deprecated. However, it is possible to achieve richer effect by using CSS.";
      break;
    case "col":
      desc =
        "The &lt;col&gt; tag specifies column properties for each column within a &lt;colgroup&gt; element.<br />The &lt;col&gt; tag is useful for applying styles to entire columns, instead of repeating the styles for each cell, for each row.";
      break;
    case "colgroup":
      desc =
        "The &lt;colgroup&gt; tag specifies a group of one or more columns in a table for formatting.<br />The &lt;colgroup&gt; tag is useful for applying styles to entire columns, instead of repeating the styles for each cell, for each row.<br />Note: The &lt;colgroup&gt; tag must be a child of a &lt;table&gt; element, after any &lt;caption&gt; elements and before any &lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;, and &lt;tr&gt; elements.<br />Tip: To define different properties to a column within a &lt;colgroup&gt;, use the &lt;col&gt; tag within the &lt;colgroup&gt; tag.";
      break;
    case "data":
      desc =
        "The &lt;data&gt; tag is used to add a machine-readable translation of a given content.<br />This element provides both a machine-readable value for data processors, and a human-readable value for rendering in a browser.<br />Tip: If the content is time- or date-related, use the &lt;time&gt; element instead.";
      break;
    case "datalist":
      desc =
        "The &lt;datalist&gt; tag specifies a list of pre-defined options for an &lt;input&gt; element.<br />The &lt;datalist&gt; tag is used to provide an 'autocomplete' feature for &lt;input&gt; elements. Users will see a drop-down list of pre-defined options as they input data.<br />The &lt;datalist&gt; element's id attribute must be equal to the &lt;input&gt; element's list attribute (this binds them together).";
      break;
    case "dd":
      desc =
        "The &lt;dd&gt; tag is used to describe a term/name in a description list.<br />The &lt;dd&gt; tag is used in conjunction with &lt;dl&gt; (defines a description list) and &lt;dt&gt; (defines terms/names).<br />Inside a &lt;dd&gt; tag you can put paragraphs, line breaks, images, links, lists, etc.";
      break;
    case "del":
      desc =
        "The &lt;del&gt; tag defines text that has been deleted from a document. Browsers will usually strike a line through deleted text.<br />Tip: Also look at the &lt;ins&gt; tag to markup inserted text.";
      break;
    case "details":
      desc =
        "The &lt;details&gt; tag specifies additional details that the user can open and close on demand.<br />The &lt;details&gt; tag is often used to create an interactive widget that the user can open and close. By default, the widget is closed. When open, it expands, and displays the content within.<br />Any sort of content can be put inside the &lt;details&gt; tag.<br />Tip: The &lt;summary&gt; tag is used in conjuction with &lt;details&gt; to specify a visible heading for the details.";
      break;
    case "dfn":
      desc =
        "The &lt;dfn&gt; tag stands for the 'definition element', and it specifies a term that is going to be defined within the content.<br />The nearest parent of the &lt;dfn&gt; tag must also contain the definition/explanation for the term.";
      break;
    case "dialog":
      desc =
        "The &lt;dialog&gt; tag defines a dialog box or subwindow.<br />The &lt;dialog&gt; element makes it easy to create popup dialogs and modals on a web page.";
      break;
    case "div":
      desc =
        "The &lt;div&gt; tag defines a division or a section in an HTML document.<br />The &lt;div&gt; tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.<br />The &lt;div&gt; tag is easily styled by using the class or id attribute.<br />Any sort of content can be put inside the &lt;div&gt; tag!<br />Note: By default, browsers always place a line break before and after the &lt;div&gt; element.";
      break;
    case "dl":
      desc =
        "The &lt;dl&gt; tag defines a description list.<br />The &lt;dl&gt; tag is used in conjunction with &lt;dt&gt; (defines terms/names) and &lt;dd&gt; (describes each term/name).";
      break;
    case "dt":
      desc =
        "The &lt;dt&gt; tag defines a term/name in a description list.<br />The &lt;dt&gt; tag is used in conjunction with &lt;dl&gt; (defines a description list) and &lt;dd&gt; (describes each term/name).";
      break;
    case "em":
      desc =
        "The &lt;em&gt; tag is used to define emphasized text. The content inside is typically displayed in italic.<br />A screen reader will pronounce the words in &lt;em&gt; with an emphasis, using verbal stress.";
      break;
    case "embed":
      desc =
        "The &lt;embed&gt; tag defines a container for an external resource, such as a web page, a picture, a media player, or a plug-in application.<br />Warning: Most browsers no longer support Java Applets and Plug-ins. ActiveX controls are no longer supported in any browsers.<br />The support for Shockwave Flash has also been turned off in modern browsers.";
      break;
    case "fieldset":
      desc =
        "The &lt;fieldset&gt; tag is used to group related elements in a form.<br />The &lt;fieldset&gt; tag draws a box around the related elements.";
      break;
    case "figcaption":
      desc =
        "The &lt;figcaption&gt; tag defines a caption for a &lt;figure&gt; element.<br />The &lt;figcaption&gt; element can be placed as the first or last child of the &lt;figure&gt; element.";
      break;
    case "figure":
      desc =
        "The &lt;figure&gt; tag specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.<br />While the content of the &lt;figure&gt; element is related to the main flow, its position is independent of the main flow, and if removed it should not affect the flow of the document.<br />Tip: The &lt;figcaption&gt; element is used to add a caption for the &lt;figure&gt; element.";
      break;
    case "footer":
      desc =
        "The &lt;footer&gt; tag defines a footer for a document or section.<br />A &lt;footer&gt; element typically contains: authorship information, copyright information, contact information, sitemap, back to top links, related documents<br />You can have several &lt;footer&gt; elements in one document.";
      break;
    case "form":
      desc =
        "The &lt;form&gt; tag is used to create an HTML form for user input.";
      break;
    case "h1":
      desc =
        "The &lt;h1&gt; to &lt;h6&gt; tags are used to define HTML headings.<br />&lt;h1&gt; defines the most important heading. &lt;h6&gt; defines the least important heading.<br />Note: Only use one &lt;h1&gt; per page - this should represent the main heading/subject for the whole page. Also, do not skip heading levels - start with &lt;h1&gt;, then use &lt;h2&gt;, and so on.";
      break;
    case "h2":
      desc =
        "The &lt;h1&gt; to &lt;h6&gt; tags are used to define HTML headings.<br />&lt;h1&gt; defines the most important heading. &lt;h6&gt; defines the least important heading.<br />Note: Only use one &lt;h1&gt; per page - this should represent the main heading/subject for the whole page. Also, do not skip heading levels - start with &lt;h1&gt;, then use &lt;h2&gt;, and so on.";
      break;
    case "h3":
      desc =
        "The &lt;h1&gt; to &lt;h6&gt; tags are used to define HTML headings.<br />&lt;h1&gt; defines the most important heading. &lt;h6&gt; defines the least important heading.<br />Note: Only use one &lt;h1&gt; per page - this should represent the main heading/subject for the whole page. Also, do not skip heading levels - start with &lt;h1&gt;, then use &lt;h2&gt;, and so on.";
      break;
    case "h4":
      desc =
        "The &lt;h1&gt; to &lt;h6&gt; tags are used to define HTML headings.<br />&lt;h1&gt; defines the most important heading. &lt;h6&gt; defines the least important heading.<br />Note: Only use one &lt;h1&gt; per page - this should represent the main heading/subject for the whole page. Also, do not skip heading levels - start with &lt;h1&gt;, then use &lt;h2&gt;, and so on.";
      break;
    case "h5":
      desc =
        "The &lt;h1&gt; to &lt;h6&gt; tags are used to define HTML headings.<br />&lt;h1&gt; defines the most important heading. &lt;h6&gt; defines the least important heading.<br />Note: Only use one &lt;h1&gt; per page - this should represent the main heading/subject for the whole page. Also, do not skip heading levels - start with &lt;h1&gt;, then use &lt;h2&gt;, and so on.";
      break;
    case "h6":
      desc =
        "The &lt;h1&gt; to &lt;h6&gt; tags are used to define HTML headings.<br />&lt;h1&gt; defines the most important heading. &lt;h6&gt; defines the least important heading.<br />Note: Only use one &lt;h1&gt; per page - this should represent the main heading/subject for the whole page. Also, do not skip heading levels - start with &lt;h1&gt;, then use &lt;h2&gt;, and so on.";
      break;
    case "head":
      desc =
        "The &lt;head&gt; element is a container for metadata (data about data) and is placed between the &lt;html&gt; tag and the &lt;body&gt; tag.<br />Metadata is data about the HTML document. Metadata is not displayed.<br />Metadata typically define the document title, character set, styles, scripts, and other meta information.";
      break;
    case "header":
      desc =
        "The &lt;header&gt; element represents a container for introductory content or a set of navigational links.<br />A &lt;header&gt; element typically contains: one or more heading elements (&lt;h1&gt; - &lt;h6&gt;), logo or icon, authorship information<br />Note: You can have several &lt;header&gt; elements in one HTML document. However, &lt;header&gt; cannot be placed within a &lt;footer&gt;, &lt;address&gt; or another &lt;header&gt; element.";
      break;
    case "hr":
      desc =
        "The &lt;hr&gt; tag defines a thematic break in an HTML page (e.g. a shift of topic).<br />The &lt;hr&gt; element is most often displayed as a horizontal rule that is used to separate content (or define a change) in an HTML page.";
      break;
    case "html":
      desc =
        "The &lt;html&gt; tag represents the root of an HTML document.<br />The &lt;html&gt; tag is the container for all other HTML elements (except for the &lt;!DOCTYPE&gt; tag).<br />Note: You should always include the lang attribute inside the &lt;html&gt; tag, to declare the language of the Web page. This is meant to assist search engines and browsers.";
      break;
    case "i":
      desc =
        "The &lt;i&gt; tag defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.<br />The &lt;i&gt; tag is often used to indicate a technical term, a phrase from another language, a thought, a ship name, etc.";
      break;
    case "iframe":
      desc =
        "The &lt;iframe&gt; tag specifies an inline frame.<br />An inline frame is used to embed another document within the current HTML document.<br />Tip: Use CSS to style the &lt;iframe&gt; (see example below).<br />Tip: It is a good practice to always include a title attribute for the &lt;iframe&gt;. This is used by screen readers to read out what the content of the &lt;iframe&gt; is.";
      break;
    case "img":
      desc =
        "The &lt;img&gt; tag is used to embed an image in an HTML page.<br />Images are not technically inserted into a web page; images are linked to web pages. The &lt;img&gt; tag creates a holding space for the referenced image.<br />The &lt;img&gt; tag has two required attributes: src - Specifies the path to the image, alt - Specifies an alternate text for the image, if the image for some reason cannot be displayed<br />Note: Also, always specify the width and height of an image. If width and height are not specified, the page might flicker while the image loads.<br />Tip: To link an image to another document, simply nest the &lt;img&gt; tag inside an &lt;a&gt; tag";
      break;
    case "input":
      desc =
        "The &lt;input&gt; tag specifies an input field where the user can enter data.<br />The &lt;input&gt; element is the most important form element.<br />The &lt;input&gt; element can be displayed in several ways, depending on the type attribute.";
      break;
    case "ins":
      desc =
        "The &lt;ins&gt; tag defines a text that has been inserted into a document. Browsers will usually underline inserted text.<br />Tip: Also look at the &lt;del&gt; tag to markup deleted text.";
      break;
    case "kbd":
      desc =
        "The &lt;kbd&gt; tag is used to define keyboard input. The content inside is displayed in the browser's default monospace font.<br />Tip: This tag is not deprecated. However, it is possible to achieve richer effect by using CSS (see example below).";
      break;
    case "label":
      desc =
        "Proper use of labels with the elements above will benefit: Screen reader users (will read out loud the label, when the user is focused on the element), Users who have difficulty clicking on very small regions (such as checkboxes) - because when a user clicks the text within the &lt;label&gt; element, it toggles the input (this increases the hit area).<br />Tip: The for attribute of &lt;label&gt; must be equal to the id attribute of the related element to bind them together. A label can also be bound to an element by placing the element inside the &lt;label&gt; element.";
      break;
    case "legend":
      desc =
        "The &lt;legend&gt; tag defines a caption for the &lt;fieldset&gt; element.";
      break;
    case "li":
      desc =
        "The &lt;li&gt; tag defines a list item. The &lt;li&gt; tag is used inside ordered lists(&lt;ol&gt;), unordered lists (&lt;ul&gt;), and in menu lists (&lt;menu&gt;).<br />In &lt;ul&gt; and &lt;menu&gt;, the list items will usually be displayed with bullet points.<br />In &lt;ol&gt;, the list items will usually be displayed with numbers or letters.<br />Tip: Use CSS to style lists.";
      break;
    case "link":
      desc =
        "The &lt;link&gt; tag defines the relationship between the current document and an external resource.<br />The &lt;link&gt; tag is most often used to link to external style sheets.<br />The &lt;link&gt; element is an empty element, it contains attributes only.";
      break;
    case "main":
      desc =
        "The &lt;main&gt; tag specifies the main content of a document.<br />The content inside the &lt;main&gt; element should be unique to the document. It should not contain any content that is repeated across documents such as sidebars, navigation links, copyright information, site logos, and search forms.<br />Note: There must not be more than one &lt;main&gt; element in a document. The &lt;main&gt; element must NOT be a descendant of an &lt;article&gt;, &lt;aside&gt;, &lt;footer&gt;, &lt;header&gt;, or &lt;nav&gt; element.";
      break;
    case "map":
      desc =
        "The &lt;map&gt; tag is used to define an image map. An image map is an image with clickable areas.<br />The required name attribute of the &lt;map&gt; element is associated with the &lt;img&gt;'s usemap attribute and creates a relationship between the image and the map.<br />The &lt;map&gt; element contains a number of &lt;area&gt; elements, that defines the clickable areas in the image map.";
      break;
    case "mark":
      desc =
        "The &lt;mark&gt; tag defines text that should be marked or highlighted.";
      break;
    case "meta":
      desc =
        "The &lt;meta&gt; tag defines metadata about an HTML document. Metadata is data (information) about data.<br />&lt;meta&gt; tags always go inside the &lt;head&gt; element, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings.<br />Metadata will not be displayed on the page, but is machine parsable.";
      break;
    case "meter":
      desc =
        "The &lt;meter&gt; tag defines a scalar measurement within a known range, or a fractional value. This is also known as a gauge.<br />Examples: Disk usage, the relevance of a query result, etc.<br />Note: The &lt;meter&gt; tag should not be used to indicate progress (as in a progress bar). For progress bars, use the &lt;progress&gt; tag.<br />Tip: Always add the &lt;label&gt; tag for best accessibility practices!";
      break;
    case "nav":
      desc =
        "The &lt;nav&gt; tag defines a set of navigation links.<br />Notice that NOT all links of a document should be inside a &lt;nav&gt; element. The &lt;nav&gt; element is intended only for major block of navigation links.<br />Browsers, such as screen readers for disabled users, can use this element to determine whether to omit the initial rendering of this content.";
      break;
    case "noscript":
      desc =
        "The &lt;noscript&gt; tag defines an alternate content to be displayed to users that have disabled scripts in their browser or have a browser that doesn't support script.<br />The &lt;noscript&gt; element can be used in both &lt;head&gt; and &lt;body&gt;. When used inside &lt;head&gt;, the &lt;noscript&gt; element could only contain &lt;link&gt;, &lt;style&gt;, and &lt;meta&gt; elements.";
      break;
    case "object":
      desc =
        "The &lt;object&gt; tag defines a container for an external resource.<br />The external resource can be a web page, a picture, a media player, or a plug-in application.";
      break;
    case "ol":
      desc =
        "The &lt;ol&gt; tag defines an ordered list. An ordered list can be numerical or alphabetical.<br />The &lt;li&gt; tag is used to define each list item.<br />Tip: Use CSS to style lists.";
      break;
    case "optgroup":
      desc =
        "The &lt;optgroup&gt; tag is used to group related options in a &lt;select&gt; element (drop-down list).<br />If you have a long list of options, groups of related options are easier to handle for a user.";
      break;
    case "option":
      desc =
        "The &lt;option&gt; tag defines an option in a select list. &lt;option&gt; elements go inside a &lt;select&gt;, &lt;optgroup&gt;, or &lt;datalist&gt; element.<br />Note: The &lt;option&gt; tag can be used without any attributes, but you usually need the value attribute, which indicates what is sent to the server on form submission.<br />Tip: If you have a long list of options, you can group related options within the &lt;optgroup&gt; tag.";
      break;
    case "output":
      desc =
        "The &lt;output&gt; tag is used to represent the result of a calculation (like one performed by a script).";
      break;
    case "p":
      desc =
        "The &lt;p&gt; tag defines a paragraph.<br />Browsers automatically add a single blank line before and after each &lt;p&gt; element.<br />Tip: Use CSS to style paragraphs.";
      break;
    case "param":
      desc =
        "The &lt;param&gt; tag is used to define parameters for an &lt;object&gt; element.";
      break;
    case "picture":
      desc =
        "The &lt;picture&gt; tag gives web developers more flexibility in specifying image resources.<br />The most common use of the &lt;picture&gt; element will be for art direction in responsive designs. Instead of having one image that is scaled up or down based on the viewport width, multiple images can be designed to more nicely fill the browser viewport.<br />The &lt;picture&gt; element contains two tags: one or more &lt;source&gt; tags and one &lt;img&gt; tag.<br />The browser will look for the first &lt;source&gt; element where the media query matches the current viewport width, and then it will display the proper image (specified in the srcset attribute). The &lt;img&gt; element is required as the last child of the &lt;picture&gt; element, as a fallback option if none of the source tags matches.<br />Tip: The &lt;picture&gt; element works 'similar' to &lt;video&gt; and &lt;audio&gt;. You set up different sources, and the first source that fits the preferences is the one being used.";
      break;
    case "pre":
      desc =
        "The &lt;pre&gt; tag defines preformatted text.<br />Text in a &lt;pre&gt; element is displayed in a fixed-width font, and the text preserves both spaces and line breaks. The text will be displayed exactly as written in the HTML source code.";
      break;
    case "progress":
      desc =
        "The &lt;progress&gt; tag represents the completion progress of a task.<br />Tip: Always add the &lt;label&gt; tag for best accessibility practices!";
      break;
    case "q":
      desc =
        "The &lt;q&gt; tag defines a short quotation.<br />Browsers normally insert quotation marks around the quotation.<br />Tip: Use &lt;blockquote&gt; for long quotations.";
      break;
    case "rp":
      desc =
        "The &lt;rp&gt; tag can be used to provide parentheses around a ruby text, to be shown by browsers that do not support ruby annotations.<br />Use &lt;rp&gt; together with &lt;ruby&gt; and &lt;rt&gt;: The &lt;ruby&gt; element consists of one or more characters that needs an explanation/pronunciation, and an &lt;rt&gt; element that gives that information, and an optional &lt;rp&gt; element that defines what to show for browsers that not support ruby annotations.";
      break;
    case "rt":
      desc =
        "The &lt;rt&gt; tag defines an explanation or pronunciation of characters (for East Asian typography) in a ruby annotation.<br />Use &lt;rt&gt; together with &lt;ruby&gt; and &lt;rp&gt;: The &lt;ruby&gt; element consists of one or more characters that needs an explanation/pronunciation, and an &lt;rt&gt; element that gives that information, and an optional &lt;rp&gt; element that defines what to show for browsers that not support ruby annotations.";
      break;
    case "ruby":
      desc =
        "The &lt;ruby&gt; tag specifies a ruby annotation.<br />A ruby annotation is a small extra text, attached to the main text to indicate the pronunciation or meaning of the corresponding characters. This kind of annotation is often used in Japanese publications.<br />Use &lt;ruby&gt; together with &lt;rt&gt; and &lt;rp&gt;: The &lt;ruby&gt; element consists of one or more characters that needs an explanation/pronunciation, and an &lt;rt&gt; element that gives that information, and an optional &lt;rp&gt; element that defines what to show for browsers that do not support ruby annotations.";
      break;
    case "s":
      desc =
        "The &lt;s&gt; tag specifies text that is no longer correct, accurate or relevant. The text will be displayed with a line through it.<br />The &lt;s&gt; tag should not be used to define deleted text in a document, use the &lt;del&gt; tag for that.";
      break;
    case "samp":
      desc =
        "The &lt;samp&gt; tag is used to define sample output from a computer program. The content inside is displayed in the browser's default monospace font.<br />Tip: This tag is not deprecated. However, it is possible to achieve richer effect by using CSS.";
      break;
    case "script":
      desc =
        "The &lt;script&gt; tag is used to embed a client-side script (JavaScript).<br />Note: There are several ways an external script can be executed:<br />If async='async': The script is executed asynchronously with the rest of the page (the script will be executed while the page continues the parsing)<br />If async is not present and defer='defer': The script is executed when the page has finished parsing<br />If neither async or defer is present: The script is fetched and executed immediately, before the browser continues parsing the page";
      break;
    case "section":
      desc = "The &lt;section&gt; tag defines a section in a document.";
      break;
    case "select":
      desc =
        "The &lt;select&gt; element is used to create a drop-down list.<br />The &lt;select&gt; element is most often used in a form, to collect user input.<br />The name attribute is needed to reference the form data after the form is submitted (if you omit the name attribute, no data from the drop-down list will be submitted).<br />The id attribute is needed to associate the drop-down list with a label.<br />The &lt;option&gt; tags inside the &lt;select&gt; element define the available options in the drop-down list.";
      break;
    case "small":
      desc =
        "The &lt;small&gt; tag defines smaller text (like copyright and other side-comments).<br />Tip: This tag is not deprecated, but it is possible to achieve richer (or the same) effect with CSS.";
      break;
    case "source":
      desc =
        "The &lt;source&gt; tag is used to specify multiple media resources for media elements, such as &lt;video&gt;, &lt;audio&gt;, and &lt;picture&gt;.<br />The &lt;source&gt; tag allows you to specify alternative video/audio/image files which the browser may choose from, based on browser support or viewport width. The browser will choose the first &lt;source&gt; it supports.";
      break;
    case "span":
      desc =
        "The &lt;span&gt; tag is an inline container used to mark up a part of a text, or a part of a document.<br />The &lt;span&gt; tag is easily styled by CSS or manipulated with JavaScript using the class or id attribute.<br />The &lt;span&gt; tag is much like the &lt;div&gt; element, but &lt;div&gt; is a block-level element and &lt;span&gt; is an inline element.";
      break;
    case "strong":
      desc =
        "The &lt;strong&gt; tag is used to define text with strong importance. The content inside is typically displayed in bold.<br />Tip: Use the &lt;b&gt; tag to specify bold text without any extra importance!";
      break;
    case "style":
      desc =
        "The &lt;style&gt; tag is used to define style information (CSS) for a document.<br />Inside the &lt;style&gt; element you specify how HTML elements should render in a browser.<br />Note: When a browser reads a style sheet, it will format the HTML document according to the information in the style sheet. If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used (see example below)!<br />Tip: To link to an external style sheet, use the &lt;link&gt; tag.";
      break;
    case "sub":
      desc =
        "The &lt;sub&gt; tag defines subscript text. Subscript text appears half a character below the normal line, and is sometimes rendered in a smaller font. Subscript text can be used for chemical formulas, like H2O.<br />Tip: Use the &lt;sup&gt; tag to define superscripted text.";
      break;
    case "summary":
      desc =
        "The &lt;summary&gt; tag defines a visible heading for the &lt;details&gt; element. The heading can be clicked to view/hide the details.<br />Note: The &lt;summary&gt; element should be the first child element of the &lt;details&gt; element.";
      break;
    case "sup":
      desc =
        "The &lt;sup&gt; tag defines superscript text. Superscript text appears half a character above the normal line, and is sometimes rendered in a smaller font. Superscript text can be used for footnotes, like WWW[1].<br />Tip: Use the &lt;sub&gt; tag to define subscript text.";
      break;
    case "svg":
      desc =
        "The &lt;svg&gt; tag defines a container for SVG graphics.<br />SVG has several methods for drawing paths, boxes, circles, text, and graphic images.<br />To learn more about SVG, please read our SVG Tutorial.";
      break;
    case "table":
      desc =
        "The &lt;table&gt; tag defines an HTML table.<br />An HTML table consists of one &lt;table&gt; element and one or more &lt;tr&gt;, &lt;th&gt;, and &lt;td&gt; elements.<br />The &lt;tr&gt; element defines a table row, the &lt;th&gt; element defines a table header, and the &lt;td&gt; element defines a table cell.<br />An HTML table may also include &lt;caption&gt;, &lt;colgroup&gt;, &lt;thead&gt;, &lt;tfoot&gt;, and &lt;tbody&gt; elements.";
      break;
    case "tbody":
      desc =
        "The &lt;tbody&gt; tag is used to group the body content in an HTML table.<br />The &lt;tbody&gt; element is used in conjunction with the &lt;thead&gt; and &lt;tfoot&gt; elements to specify each part of a table (body, header, footer).<br />Note: The &lt;tbody&gt; element must have one or more &lt;tr&gt; tags inside.<br />The &lt;tbody&gt; tag must be used in the following context: As a child of a &lt;table&gt; element, after any &lt;caption&gt;, &lt;colgroup&gt;, and &lt;thead&gt; elements.<br />Tip: The &lt;thead&gt;, &lt;tbody&gt;, and &lt;tfoot&gt; elements will not affect the layout of the table by default. However, you can use CSS to style these elements (see example below)!";
      break;
    case "td":
      desc =
        "The &lt;td&gt; tag defines a standard data cell in an HTML table.<br />An HTML table has two kinds of cells: Header cells - contains header information (created with the &lt;th&gt; element), Data cells - contains data (created with the &lt;td&gt; element), The text in &lt;td&gt; elements are regular and left-aligned by default.<br />The text in &lt;th&gt; elements are bold and centered by default.";
      break;
    case "template":
      desc =
        "The &lt;template&gt; tag is used as a container to hold some HTML content hidden from the user when the page loads.<br />The content inside &lt;template&gt; can be rendered later with a JavaScript.<br />You can use the &lt;template&gt; tag if you have some HTML code you want to use over and over again, but not until you ask for it. To do this without the &lt;template&gt; tag, you have to create the HTML code with JavaScript to prevent the browser from rendering the code.";
      break;
    case "textarea":
      desc =
        "The &lt;textarea&gt; tag defines a multi-line text input control.<br />The &lt;textarea&gt; element is often used in a form, to collect user inputs like comments or reviews.<br />A text area can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier).<br />The size of a text area is specified by the &lt;cols&gt; and &lt;rows&gt; attributes (or with CSS).<br />The name attribute is needed to reference the form data after the form is submitted (if you omit the name attribute, no data from the text area will be submitted).<br />The id attribute is needed to associate the text area with a label.<br />Tip: Always add the &lt;label&gt; tag for best accessibility practices!";
      break;
    case "tfoot":
      desc =
        "The &lt;tfoot&gt; tag is used to group footer content in an HTML table.<br />The &lt;tfoot&gt; element is used in conjunction with the &lt;thead&gt; and &lt;tbody&gt; elements to specify each part of a table (footer, header, body).<br />Browsers can use these elements to enable scrolling of the table body independently of the header and footer. Also, when printing a large table that spans multiple pages, these elements can enable the table header and footer to be printed at the top and bottom of each page.<br />Note: The &lt;tfoot&gt; element must have one or more &lt;tr&gt; tags inside.<br />The &lt;tfoot&gt; tag must be used in the following context: As a child of a &lt;table&gt; element, after any &lt;caption&gt;, &lt;colgroup&gt;, &lt;thead&gt;, and &lt;tbody&gt; elements.<br />Tip: The &lt;thead&gt;, &lt;tbody&gt;, and &lt;tfoot&gt; elements will not affect the layout of the table by default. However, you can use CSS to style these elements (see example below)!";
      break;
    case "th":
      desc =
        "The &lt;th&gt; tag defines a header cell in an HTML table.<br />An HTML table has two kinds of cells: Header cells - contains header information (created with the &lt;th&gt; element), Data cells - contains data (created with the &lt;td&gt; element), The text in &lt;th&gt; elements are bold and centered by default.<br />The text in &lt;td&gt; elements are regular and left-aligned by default.";
      break;
    case "thead":
      desc =
        "The &lt;thead&gt; tag is used to group header content in an HTML table.<br />The &lt;thead&gt; element is used in conjunction with the &lt;tbody&gt; and &lt;tfoot&gt; elements to specify each part of a table (header, body, footer).<br />Browsers can use these elements to enable scrolling of the table body independently of the header and footer. Also, when printing a large table that spans multiple pages, these elements can enable the table header and footer to be printed at the top and bottom of each page.<br />Note: The &lt;thead&gt; element must have one or more &lt;tr&gt; tags inside.<br />The &lt;thead&gt; tag must be used in the following context: As a child of a &lt;table&gt; element, after any &lt;caption&gt; and &lt;colgroup&gt; elements, and before any &lt;tbody&gt;, &lt;tfoot&gt;, and &lt;tr&gt; elements.<br />Tip: The &lt;thead&gt;, &lt;tbody&gt;, and &lt;tfoot&gt; elements will not affect the layout of the table by default. However, you can use CSS to style these elements (see example below)!";
      break;
    case "time":
      desc =
        "The &lt;time&gt; tag defines a specific time (or datetime).<br />The datetime attribute of this element is used translate the time into a machine-readable format so that browsers can offer to add date reminders through the user's calendar, and search engines can produce smarter search results.";
      break;
    case "title":
      desc =
        "The &lt;title&gt; tag defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab.<br />The &lt;title&gt; tag is required in HTML documents!<br />The contents of a page title is very important for search engine optimization (SEO)! The page title is used by search engine algorithms to decide the order when listing pages in search results.<br />The &lt;title&gt; element: defines a title in the browser toolbar, provides a title for the page when it is added to favorites, displays a title for the page in search-engine results<br />Here are some tips for creating good titles: Go for a longer, descriptive title (avoid one- or two-word titles), Search engines will display about 50-60 characters of the title, so try not to have titles longer than that, Do not use just a list of words as the title (this may reduce the page's position in search results), So, try to make the title as accurate and meaningful as possible!<br />Note: You can NOT have more than one &lt;title&gt; element in an HTML document.";
      break;
    case "tr":
      desc =
        "The &lt;tr&gt; tag defines a row in an HTML table.<br />A &lt;tr&gt; element contains one or more &lt;th&gt; or &lt;td&gt; elements.";
      break;
    case "track":
      desc =
        "The &lt;track&gt; tag specifies text tracks for &lt;audio&gt; or &lt;video&gt; elements.<br />This element is used to specify subtitles, caption files or other files containing text, that should be visible when the media is playing.<br />Tracks are formatted in WebVTT format (.vtt files).";
      break;
    case "u":
      desc =
        "The &lt;u&gt; tag represents some text that is unarticulated and styled differently from normal text, such as misspelled words or proper names in Chinese text. The content inside is typically displayed with an underline. You can change this with CSS (see example below).<br />Tip: Avoid using the &lt;u&gt; element where it could be confused for a hyperlink!";
      break;
    case "ul":
      desc =
        "The &lt;ul&gt; tag defines an unordered (bulleted) list.<br />Use the &lt;ul&gt; tag together with the &lt;li&gt; tag to create unordered lists.<br />Tip: Use CSS to style lists.<br />Tip: For ordered lists, use the &lt;ol&gt; tag. ";
      break;
    case "var":
      desc =
        "The &lt;var&gt; tag is used to defines a variable in programming or in a mathematical expression. The content inside is typically displayed in italic.<br />Tip: This tag is not deprecated. However, it is possible to achieve richer effect by using CSS.";
      break;
    case "video":
      desc =
        "The &lt;video&gt; tag is used to embed video content in a document, such as a movie clip or other video streams.<br />The &lt;video&gt; tag contains one or more &lt;source&gt; tags with different video sources. The browser will choose the first source it supports.<br />The text between the &lt;video&gt; and &lt;/video&gt; tags will only be displayed in browsers that do not support the &lt;video&gt; element.<br />There are three supported video formats in HTML: MP4, WebM, and OGG.";
      break;
    case "wbr":
      desc =
        "The &lt;wbr&gt; (Word Break Opportunity) tag specifies where in a text it would be ok to add a line-break.<br />Tip: When a word is too long, the browser might break it at the wrong place. You can use the &lt;wbr&gt; element to add word break opportunities.";
      break;

    // -------------------- Input types -------------------------------

    case "itext":
      desc = "defines a single-line text input field";
      break;
    case "ipass":
      desc = "defines a password field";
      break;
    case "ichkbx":
      desc =
        "defines a checkbox.<br />Checkboxes let a user select ZERO or MORE options of a limited number of choices.";
      break;
    case "iradio":
      desc =
        "defines a radio button.<br />Radio buttons let a user select ONLY ONE of a limited number of choices";
      break;
    case "icolor":
      desc =
        "The &lt;input type='color'&gt; is used for input fields that should contain a color.<br />Depending on browser support, a color picker can show up in the input field.";
      break;
    case "idate":
      desc =
        "The &lt;input type='date'&gt; is used for input fields that should contain a date.<br />Depending on browser support, a date picker can show up in the input field.";
      break;
    case "idtloc":
      desc =
        "The &lt;input type='datetime-local'&gt; specifies a date and time input field, with no time zone.<br />Depending on browser support, a date picker can show up in the input field.";
      break;
    case "iemail":
      desc =
        "The &lt;input type='email'&gt; is used for input fields that should contain an e-mail address.<br />Depending on browser support, the e-mail address can be automatically validated when submitted.<br />Some smartphones recognize the email type, and add '.com' to the keyboard to match email input.";
      break;
    case "ifile":
      desc =
        "The &lt;input type='file'&gt; defines a file-select field and a 'Browse' button for file uploads.";
      break;
    case "ihidden":
      desc = "";
      break;
    case "iimage":
      desc = "";
      break;
    case "imonth":
      desc =
        "The &lt;input type='month'&gt; allows the user to select a month and year.<br />Depending on browser support, a date picker can show up in the input field.";
      break;
    case "inumber":
      desc =
        "The &lt;input type='number'&gt; defines a numeric input field.<br />You can also set restrictions on what numbers are accepted.<br />The following example displays a numeric input field";
      break;
    case "irange":
      desc =
        "The &lt;input type='range'&gt; defines a control for entering a number whose exact value is not important (like a slider control).<br />Default range is 0 to 100. However, you can set restrictions on what numbers are accepted with the min, max, and step attributes";
      break;
    case "ireset":
      desc =
        "defines a reset button that will reset all form values to their default values";
      break;
    case "isubmit":
      desc =
        "defines a button for submitting form data to a form-handler.<br />The form-handler is typically a server page with a script for processing input data.";
      break;
    case "isearch":
      desc =
        "The &lt;input type='search'&gt; is used for search fields (a search field behaves like a regular text field).";
      break;
    case "itel":
      desc =
        "The &lt;input type='tel'&gt; is used for input fields that should contain a telephone number.";
      break;
    case "itime":
      desc =
        "The &lt;input type='time'&gt; allows the user to select a time (no time zone).<br />Depending on browser support, a time picker can show up in the input field.";
      break;
    case "iurl":
      desc =
        "The &lt;input type='url'&gt; is used for input fields that should contain a URL address.<br />Depending on browser support, the url field can be automatically validated when submitted.<br />Some smartphones recognize the url type, and adds '.com' to the keyboard to match url input.";
      break;
    case "iweek":
      desc =
        "The &lt;input type='week'&gt; allows the user to select a week and year.<br />Depending on browser support, a date picker can show up in the input field.";
      break;

    // -------------------- HTML Exempted  -------------------------------
    case "acronym":
      desc =
        "An acronym or abbreviation should be marked up with the &lt;abbr&gt; tag";
      break;
    case "applet":
      desc =
        "The &lt;applet&gt; tag was used in HTML 4 to define an embedded applet (Plug-in).<br />Plug-ins are a computer programs that extend the standard functionality of the browser.<br />Plug-ins have been used for many different purposes: Run Java applets, Run ActiveX controls, Display Flash movies, Display maps, Scan for viruses, Verify a bank id";
      break;
    case "basefont":
      desc =
        "The &lt;basefont&gt; tag was used in HTML 4 to specify a default text-color, font-size or font-family for all the text in an HTML document.";
      break;
    case "big":
      desc = "The &lt;big&gt; tag was used in HTML 4 to define bigger text.";
      break;
    case "center":
      desc = "The &lt;center&gt; tag was used in HTML4 to center-align text.";
      break;
    case "dir":
      desc = "The &lt;dir&gt; tag was used in HTML 4 to list directory titles.";
      break;
    case "font":
      desc =
        "The &lt;font&gt; tag was used in HTML 4 to specify the font face, font size, and color of text.";
      break;
    case "frame":
      desc =
        "The &lt;frame&gt; tag was used in HTML 4 to define one particular window (frame) within a <frameset>.";
      break;
    case "frameset":
      desc =
        "The &lt;frameset&gt; tag was used in HTML 4 to define a frameset.";
      break;
    case "noframes":
      desc =
        "The &lt;noframes&gt; tag was used in HTML 4 to act as a fallback tag for browsers that did not support frames.";
      break;
    case "strike":
      desc =
        "The &lt;strike&gt; tag was used in HTML 4 to define strikethrough text.";
      break;
    case "tt":
      desc = "The &lt;tt&gt; tag was used in HTML 4 to define teletype text.";
      break;

    case "h1id":
      desc = "This is for creating h1 header anchor tags.";
      break;
    case "h2id":
      desc = "This is for creating h2 header anchor tags.";
      break;
    case "h3id":
      desc = "This is for creating h3 header anchor tags.";
      break;
    case "h4id":
      desc = "This is for creating h4 header anchor tags.";
      break;
    case "h5id":
      desc = "This is for creating h5 header anchor tags.";
      break;
    case "h6id":
      desc = "This is for creating h6 header anchor tags.";
      break;
  }

  $("." + opt).css("margin-top", 10);
  $("." + opt).html(desc);
}

function flx() {
  var itms = document.getElementById("items").value;
  var css = cpy_parent();
  var it = cpy_item();
  var bdy = "";
  var htm = "";

  if (itms !== " ") {
    if (itms === "text") {
      bdy = '<div class="parent">';
      bdy = bdy + '<div class="item flex-1">1</div>';
      bdy = bdy + '<div class="item flex-2">2</div>';
      bdy = bdy + '<div class="item flex-3">3</div>';
      bdy = bdy + '<div class="item flex-4">4</div>';
      bdy = bdy + '<div class="item flex-5">5</div>';
      bdy = bdy + '<div class="item flex-6">6</div>';
      bdy = bdy + '<div class="item flex-7">7</div>';
      bdy = bdy + '<div class="item flex-8">8</div>';
      bdy = bdy + '<div class="item flex-9">9</div>';
      bdy = bdy + "</div>";
    } else {
      bdy = '<div class="parent">';
      bdy =
        bdy +
        '<div class="item flex-1"><img src="images/1.png" alt="Pic 1" /></div>';
      bdy =
        bdy +
        '<div class="item flex-2"><img src="images/2.png" alt="Pic 2" /></div>';
      bdy =
        bdy +
        '<div class="item flex-3"><img src="images/3.png" alt="Pic 3" /></div>';
      bdy =
        bdy +
        '<div class="item flex-4"><img src="images/4.png" alt="Pic 4" /></div>';
      bdy =
        bdy +
        '<div class="item flex-5"><img src="images/5.png" alt="Pic 5" /></div>';
      bdy =
        bdy +
        '<div class="item flex-6"><img src="images/6.png" alt="Pic 6" /></div>';
      bdy =
        bdy +
        '<div class="item flex-7"><img src="images/7.png" alt="Pic 7" /></div>';
      bdy =
        bdy +
        '<div class="item flex-8"><img src="images/8.png" alt="Pic 8" /></div>';
      bdy =
        bdy +
        '<div class="item flex-9"><img src="images/9.png" alt="Pic 9" /></div>';
      bdy = bdy + "</div>";
    }
  }

  htm =
    '<html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><style>';
  htm = htm + css;

  htm =
    htm + ".parent { width: 100%; height: 100%; background-color: lightgray; }";
  htm =
    htm +
    ".item { font-size: 100px; background-color: lightblue; border: 1px solid red; }";

  htm = htm + it;
  htm = htm + "</style></head>";
  htm = htm + bdy;

  $("#flx-test").contents().find("html").html(htm);
}

function cpy_parent() {
  var itms = document.getElementById("items").value;
  var fldr = document.getElementById("flex-dir").value;
  var flwr = document.getElementById("flex-wr").value;
  var fljc = document.getElementById("justify-contnt").value;
  var flai = document.getElementById("align-itms").value;
  var flac = document.getElementById("align-contnt").value;

  var css = ".parent { display: flex; ";

  if (fldr !== " ") {
    css = css + "flex-direction: " + fldr + "; ";
  }

  if (flwr !== " ") {
    css = css + "flex-wrap: " + flwr + "; ";
  }

  if (fljc !== " ") {
    css = css + "justify-content: " + fljc + "; ";
  }

  if (flai !== " ") {
    css = css + "align-items: " + flai + "; ";
  }

  if (flac !== " ") {
    css = css + "align-content: " + flac + "; ";
  }

  css = css + "}";

  return css;
}

function copy_parent() {
  var css = cpy_parent();
  copy_to_cb(css);
}

function cpy_item() {
  var mdfy = document.getElementById("modify").value;
  var flgr = document.getElementById("flex-grw").value;
  var flsr = document.getElementById("flex-shrnk").value;
  var flbs = document.getElementById("flex-bass").value;
  var flor = document.getElementById("ordr").value;
  var flas = document.getElementById("align-slf").value;
  var it = "";

  if (mdfy !== " ") {
    it = ".flex-" + mdfy + " { ";

    if (flgr !== " ") {
      it = it + "flex-grow: " + flgr + "; ";
    }

    if (flsr !== " ") {
      it = it + "flex-shrink: " + flsr + "; ";
    }

    if (flbs !== " ") {
      it = it + "flex-basis: " + flbs + "; ";
    }

    if (flor !== " ") {
      it = it + "order: " + flor + "; ";
    }

    if (flas !== " ") {
      it = it + "align-self: " + flas + "; ";
    }

    it = it + " }";
  }

  return it;
}

function copy_item() {
  var it = cpy_item();
  copy_to_cb(it);
}

function reset_flex() {
  $("#flx-test").contents().find("html").html("<html></html>");
}
