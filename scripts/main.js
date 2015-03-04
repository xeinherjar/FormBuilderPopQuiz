function formBuilder(spec,$el){
  // BEGIN EDITING HERE

   console.log(spec);

   var form = $('<form></form>');
   form.append('<h2>' + spec.title + '</h2>');
   form.append('<h4>' + spec.desc  + '</h4>');

  spec.params.forEach(function(s) {
    var boxArray;

    switch(s.type) {
      case 'int':
      case 'text':
      case 'email':
      case 'textarea':
      case 'string':
        input = $('<input></input>');
        input.attr('type', s.type);
        break;
      case 'select':
        input =  $('<select></select>');

        s.values.forEach(function(v) {
          var option = $('<option></option>')
                        .attr('value', v)
                        .text(v);
          input.append(option);
        });

        break;
      case 'checkbox':
        if (!s.values) {
        input = $('<input></input>');
        input.attr('type', s.type);
        break;
        }

        input = $('<div></div>');
        s.values.forEach(function(v) {
          var box = $('<input></input>');
          box.attr('type', s.type);
          box.attr('name', s.name);
          box.attr('value', v);
          var span = $('<span></span>');
          span.text(v);

          box.append(span);
          input.append(box);
        });

        break;
      default:
        input = $(s.type);
        console.log(s.type);
    }

    var label;
    for (var k in s) {
      switch(k) {
        case 'type':
          break;
        case 'label':
          label = $('<label></label>');
          label.text(s[k]);
          break;
        case 'values':
          break;
        default:
          if (s.type === 'checkbox' && s.values) { break; }
          input.attr(k, s[k]);
      }
    }

    if (label) {
      label.append(input);
      form.append(label);
    } else {
      form.append(input);
    }
  });



  $el.html(form.html());
  // STOP EDITING HERE
}
