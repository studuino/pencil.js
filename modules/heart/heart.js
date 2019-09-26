import Component from "@pencil.js/component";

/**
 * Heart class
 * @class
 * @extends Component
 */
export default class Heart extends Component {
    /**
     * Heart constructor
     * @param {PositionDefinition} positionDefinition - Position of the center of the heart
     * @param {Number} radius - radius The distance from center of heart
     * @param {ComponentOptions} [options] - Drawing options
     */
    constructor (positionDefinition, radius, options) {
        super(positionDefinition, options);
        this.radius = radius;
    }

    /**
     * @inheritDoc
     */
    toJSON () {
        const { radius } = this;
        return {
            ...super.toJSON(),
            radius,
        };
    }

    /**
     * Draw the Heart
     * @param {Path2D} path - Drawing context
     * @return {Heart} Itself
     */
    trace (path) {
        path.moveTo(75 * this.radius, 40 * this.radius);
        path.bezierCurveTo(
            75 * this.radius,
            37 * this.radius,
            70 * this.radius,
            25 * this.radius,
            50 * this.radius,
            25 * this.radius,
        );
        path.bezierCurveTo(
            20 * this.radius,
            25 * this.radius,
            20 * this.radius,
            59 * this.radius,
            20 * this.radius,
            59 * this.radius,
        );
        path.bezierCurveTo(
            20 * this.radius,
            80 * this.radius,
            40 * this.radius,
            102 * this.radius,
            75 * this.radius,
            120 * this.radius,
        );
        path.bezierCurveTo(
            110 * this.radius,
            102 * this.radius,
            130 * this.radius,
            80 * this.radius,
            130 * this.radius,
            59 * this.radius,
        );
        path.bezierCurveTo(
            130 * this.radius,
            59 * this.radius,
            130 * this.radius,
            25 * this.radius,
            100 * this.radius,
            25 * this.radius,
        );
        path.bezierCurveTo(
            85 * this.radius,
            25 * this.radius,
            75 * this.radius,
            37 * this.radius,
            75 * this.radius,
            40 * this.radius,
        );

        return this;
    }
}