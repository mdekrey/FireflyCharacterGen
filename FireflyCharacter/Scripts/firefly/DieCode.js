var Firefly;
(function (Firefly) {
    var DieCode = (function () {
        function DieCode(sides) {
            this.sides = sides;
        }
        DieCode.prototype.stepUp = function () {
            return _.find(DieCode.references, { sides: this.sides + 2 });
        };
        DieCode.prototype.display = function () {
            return 'd' + this.sides;
        };
        DieCode.prototype.sideCount = function () {
            return this.sides;
        };
        DieCode.references = [
            new DieCode(4),
            new DieCode(6),
            new DieCode(8),
            new DieCode(10),
            new DieCode(12),
        ];
        DieCode.d4 = _.find(DieCode.references, { sides: 4 });
        DieCode.d6 = _.find(DieCode.references, { sides: 6 });
        DieCode.d8 = _.find(DieCode.references, { sides: 8 });
        DieCode.d10 = _.find(DieCode.references, { sides: 10 });
        DieCode.d12 = _.find(DieCode.references, { sides: 12 });
        return DieCode;
    })();
})(Firefly || (Firefly = {}));
//# sourceMappingURL=DieCode.js.map