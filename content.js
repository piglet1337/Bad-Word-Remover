const badwords = ["fuck","shit", "mother fucker", "motherfucker", "rape", "suicide", "chink", "suicidal"]
for (word of badwords){
    replaceTextOnPage(word,"[Blocked]")
}

function replaceTextOnPage(from, to){
    getAllTextNodes().forEach(function(node){
      node.nodeValue = node.nodeValue.replace(new RegExp(quote(from), 'gi'), to)
    })
  
    function getAllTextNodes(){
      var result = [];
  
      (function scanSubTree(node){
        if(node.childNodes.length) 
          for(var i = 0; i < node.childNodes.length; i++) 
            scanSubTree(node.childNodes[i])
        else if(node.nodeType == Node.TEXT_NODE) 
          result.push(node)
      })(document)
  
      return result
    }
  
    function quote(str){
      return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }
}