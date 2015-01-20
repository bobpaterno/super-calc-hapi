(function() {
  'use strict';

  $(document).ready(initialize);


  function initialize() {
    $('#title1').click(title);
    $('.number').click(display);
    $('.clear').click(clearDisplay);
    $('.decimal').click(addDecimal);
    $('.sign').click(changeSign);
    $('.push').click(doPush);
    $('.operator').click(operator);
  }

  function title() {
    var display = $('.calculator').css('display');
    if(display === 'none') {
      $('.calculator').fadeIn();
      $('#queue').fadeIn();
    } else {
      $('.calculator').fadeOut();
      $('#queue').fadeOut();
    }
  }

  function operator() {
    var x = $('#queue > div:nth-child(1)').text() * 1;
    var y = $('#queue > div:nth-child(2)').text() * 1;
    var z;
    var op = $(this).data('op');  // could also use $(this).attr('data-op');
    switch(op) {
      case 'add':
        z = x + y;
        break;
        case 'sub':
          z = x - y;
          break;
          case 'mul':
            z = x * y;
            break;
            case 'div':
              z = x / y;
              break;
              case 'exp':
                z = Math.pow(x, y);
                break;
                case 'root':
                  z = Math.sqrt(x);
                  break;
                  case 'fact':
                    z = fact(x);
                    break;
                    case 'sum':
                      z = sum();
                    }
                    z = Math.round(z*1000) / 1000;
                    $('#display').text(z);
                  }

                  function sum() {
                    var result = 0;
                    $('#queue div').each(function(index,val){
                      result += (val.textContent * 1);
                    });
                    return result;
                  }


                  function fact(num) {
                    var i, result = num;
                    for(i=1; i<num; i++) {
                      result *= i;
                    }
                    return result;
                  }

                  function doPush() {
                    var $div = $('<div>');
                    $div.text($('#display').text());
                    $('#queue').prepend($div);
                    $('#display').text('0');
                  }

                  function display() {
                    var num = this.textContent;
                    var output = $('#display').text();

                    if(output === '0') {
                      output = num;
                    }
                    else {
                      output += num;
                    }
                    $('#display').text(output);
                  }

                  function clearDisplay() {
                    var clearType = this.textContent;

                    if(clearType === 'C') {
                      $('#display').text(0);
                    }
                    else {
                      $('#queue').empty();
                    }
                  }

                  function changeSign() {
                    var val = $('#display').text();
                    $('#display').text(val*-1);
                  }

                  function addDecimal() {
                    var num = $('#display').text();
                    var nodecimal = num.indexOf('.') === -1;

                    if(nodecimal) {
                      $('#display').text(num + '.');
                    }
                  }

                })();
