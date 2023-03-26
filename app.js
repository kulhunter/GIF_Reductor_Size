bplist00�_WebMainResource�	
^WebResourceURL_WebResourceFrameName_WebResourceData_WebResourceMIMEType_WebResourceTextEncodingName_file:///index.htmlPOy<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2299.4">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">const fileInput = document.getElementById("fileInput");</p>
<p class="p1">const form = document.querySelector("form");</p>
<p class="p2"><br></p>
<p class="p1">form.addEventListener("submit", (event) =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">  </span>event.preventDefault();</p>
<p class="p1"><span class="Apple-converted-space">  </span>const file = fileInput.files[0];</p>
<p class="p2"><span class="Apple-converted-space">  </span></p>
<p class="p1"><span class="Apple-converted-space">  </span>if (file.type !== "image/gif") {</p>
<p class="p1"><span class="Apple-converted-space">    </span>alert("El archivo seleccionado no es un GIF.");</p>
<p class="p1"><span class="Apple-converted-space">    </span>return;</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>const reader = new FileReader();</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>reader.onload = (event) =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">    </span>const img = new Image();</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>img.onload = () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">      </span>const canvas = document.createElement("canvas");</p>
<p class="p1"><span class="Apple-converted-space">      </span>const ctx = canvas.getContext("2d");</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">      </span>canvas.width = img.width;</p>
<p class="p1"><span class="Apple-converted-space">      </span>canvas.height = img.height;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">      </span>ctx.drawImage(img, 0, 0, img.width, img.height);</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">      </span>canvas.toBlob((blob) =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">        </span>const url = URL.createObjectURL(blob);</p>
<p class="p1"><span class="Apple-converted-space">        </span>const link = document.createElement("a");</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">        </span>link.href = url;</p>
<p class="p1"><span class="Apple-converted-space">        </span>link.download = `${file.name}-reduced.gif`;</p>
<p class="p1"><span class="Apple-converted-space">        </span>link.click();</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">        </span>URL.revokeObjectURL(url);</p>
<p class="p1"><span class="Apple-converted-space">      </span>}, "image/gif");</p>
<p class="p1"><span class="Apple-converted-space">    </span>};</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>img.src = event.target.result;</p>
<p class="p1"><span class="Apple-converted-space">  </span>};</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">  </span>reader.readAsDataURL(file);</p>
<p class="p1">});</p>
</body>
</html>
Ytext/htmlUutf-8    ( 7 N ` v � � �'1                           7