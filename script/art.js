// Generated by CoffeeScript 1.6.1
(function() {
  var cAttr, circles, lAttr, lines, raphael, root3, setAndBindDimensions, setDimensions;

  raphael = void 0;

  cAttr = void 0;

  lAttr = {
    'stroke': 'white',
    'stroke-width': 0.5,
    'fill': 'blue'
  };

  root3 = Math.sqrt(3);

  $(document).ready(function() {
    setAndBindDimensions();
    circles();
    $('svg').height($(window).height());
    return lines();
  });

  circles = function() {
    var R, X, Y, i, _i, _results;
    Y = function() {
      return Math.random() * $(window).height();
    };
    X = function() {
      return Math.random() * $(window).width();
    };
    R = function() {
      return 160 + Math.random() * 60 - 30;
    };
    cAttr = function() {
      var a, b, color, componentToHex, g, hex, r;
      r = Math.random() * 150 + 50;
      g = Math.random() * 150 + 50;
      b = Math.random() * 150 + 50;
      a = Math.random() / 3 + 0.35;
      componentToHex = function(c) {
        if (c.toString(16).length === 2) {
          return c.toString(16);
        } else {
          return "0" + c.toString(16);
        }
      };
      hex = componentToHex(Math.floor(r)) + componentToHex(Math.floor(g)) + componentToHex(Math.floor(b));
      color = "rgb(" + r + ", " + g + ", " + b + ")";
      return {
        'stroke': 'white',
        'stroke-width': 0.4,
        'fill': color,
        'opacity': a
      };
    };
    _results = [];
    for (i = _i = 0; _i <= 100; i = ++_i) {
      _results.push(raphael.circle(X(), Y(), R()).attr(cAttr()));
    }
    return _results;
  };

  lines = function() {
    var Boxes, Fill, Horizontals, Verticals;
    Verticals = function() {
      var i, verticals, x1, x2, y1, y2, _i, _ref;
      verticals = [];
      for (i = _i = 0, _ref = $(window).width() / 50 + 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        x1 = x2 = i * 50;
        y1 = 0;
        y2 = $(window).height();
        raphael.path("M" + x1 + "," + y1 + ",L" + x2 + "," + y2).attr(lAttr);
        verticals.push(x1);
      }
      return verticals;
    };
    Horizontals = function() {
      var horizontals, i, x1, x2, y1, y2, _i, _ref;
      horizontals = [];
      for (i = _i = 0, _ref = $(window).height() / (50 * root3) + 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        y1 = y2 = i * 50 * root3;
        x1 = 0;
        x2 = $(window).width();
        raphael.path("M" + x1 + "," + y1 + ",L" + x2 + "," + y2).attr(lAttr);
        horizontals.push(y1);
      }
      return horizontals;
    };
    Boxes = function(verticals, horizontals) {
      var boxes, h, i, j, oneThird, v, _i, _j, _len, _len1;
      boxes = [];
      oneThird = 50 * root3 / 3;
      for (i = _i = 0, _len = verticals.length; _i < _len; i = ++_i) {
        v = verticals[i];
        if (i % 2 !== 0 && i !== 0) {
          for (j = _j = 0, _len1 = horizontals.length; _j < _len1; j = ++_j) {
            h = horizontals[j];
            if (j !== 0) {
              boxes.push({
                'N': {
                  'x': verticals[i - 1],
                  'y': horizontals[j - 1]
                },
                'NE': {
                  'x': verticals[i],
                  'y': horizontals[j - 1]
                },
                'EN': {
                  'x': verticals[i],
                  'y': horizontals[j - 1] + oneThird
                },
                'ES': {
                  'x': verticals[i],
                  'y': horizontals[j] - oneThird
                },
                'SE': {
                  'x': verticals[i],
                  'y': horizontals[j]
                },
                'S': {
                  'x': verticals[i - 1],
                  'y': horizontals[j]
                },
                'SW': {
                  'x': verticals[i - 2],
                  'y': horizontals[j]
                },
                'WS': {
                  'x': verticals[i - 2],
                  'y': horizontals[j] - oneThird
                },
                'WN': {
                  'x': verticals[i - 2],
                  'y': horizontals[j - 1] + oneThird
                },
                'NW': {
                  'x': verticals[i - 2],
                  'y': horizontals[j - 1]
                },
                'CN': {
                  'x': verticals[i - 1],
                  'y': horizontals[j - 1] + oneThird
                },
                'CS': {
                  'x': verticals[i - 1],
                  'y': horizontals[j] - oneThird
                }
              });
            }
          }
        }
      }
      return boxes;
    };
    Fill = function(boxes) {
      var b, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = boxes.length; _i < _len; _i++) {
        b = boxes[_i];
        raphael.path("M" + b['N']['x'] + "," + b['N']['y'] + ",L" + b['SE']['x'] + "," + b['SE']['y'] + "," + b['SW']['x'] + "," + b['SW']['y'] + "," + b['N']['x'] + "," + b['N']['y']).attr(lAttr).attr({
          'fill-opacity': Math.random() / 10
        });
        raphael.path("M" + b['S']['x'] + "," + b['S']['y'] + ",L" + b['NW']['x'] + "," + b['NW']['y'] + "," + b['NE']['x'] + "," + b['NE']['y'] + "," + b['S']['x'] + "," + b['S']['y']).attr(lAttr).attr({
          'fill-opacity': Math.random() / 10
        });
        raphael.path("M" + b['N']['x'] + "," + b['N']['y'] + ",L" + b['WN']['x'] + "," + b['WN']['y']).attr(lAttr);
        raphael.path("M" + b['N']['x'] + "," + b['N']['y'] + ",L" + b['EN']['x'] + "," + b['EN']['y']).attr(lAttr);
        raphael.path("M" + b['S']['x'] + "," + b['S']['y'] + ",L" + b['WS']['x'] + "," + b['WS']['y']).attr(lAttr);
        raphael.path("M" + b['S']['x'] + "," + b['S']['y'] + ",L" + b['ES']['x'] + "," + b['ES']['y']).attr(lAttr);
        raphael.path("M" + b['WN']['x'] + "," + b['WN']['y'] + ",L" + b['CS']['x'] + "," + b['CS']['y']).attr(lAttr);
        raphael.path("M" + b['EN']['x'] + "," + b['EN']['y'] + ",L" + b['CS']['x'] + "," + b['CS']['y']).attr(lAttr);
        raphael.path("M" + b['WS']['x'] + "," + b['WS']['y'] + ",L" + b['CN']['x'] + "," + b['CN']['y']).attr(lAttr);
        raphael.path("M" + b['ES']['x'] + "," + b['ES']['y'] + ",L" + b['CN']['x'] + "," + b['CN']['y']).attr(lAttr);
        _results.push(raphael.triangle);
      }
      return _results;
    };
    return Fill(Boxes(Verticals(), Horizontals()));
  };

  setAndBindDimensions = function() {
    var art;
    art = $("#art");
    return raphael = Raphael(art.get(0));
  };

  setDimensions = function() {
    var art;
    art = $("#art");
    art.height($(window).height());
    art.width($(window).width());
    raphael.setSize(art.width(), art.height());
    return $('svg').height($(window).height());
  };

  setDimensions();

  $(window).bind('resize', function() {
    return setDimensions();
  });

}).call(this);
