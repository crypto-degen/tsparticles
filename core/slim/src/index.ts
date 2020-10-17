import { particlesJS, pJSDom, ShapeType, tsParticles } from "tsparticles-core";
import { SquareDrawer } from "tsparticles-core/dist/ShapeDrawers/SquareDrawer";
import { TextDrawer } from "tsparticles-core/dist/ShapeDrawers/TextDrawer";
import { ImageDrawer } from "tsparticles-core/dist/ShapeDrawers/ImageDrawer";
import { LineDrawer } from "tsparticles-core/dist/ShapeDrawers/LineDrawer";
import { CircleDrawer } from "tsparticles-core/dist/ShapeDrawers/CircleDrawer";
import { TriangleDrawer } from "tsparticles-core/dist/ShapeDrawers/TriangleDrawer";
import { StarDrawer } from "tsparticles-core/dist/ShapeDrawers/StarDrawer";
import { PolygonDrawer } from "tsparticles-core/dist/ShapeDrawers/PolygonDrawer";

const squareDrawer = new SquareDrawer();
const textDrawer = new TextDrawer();
const imageDrawer = new ImageDrawer();

tsParticles.addShape(ShapeType.line, new LineDrawer());
tsParticles.addShape(ShapeType.circle, new CircleDrawer());
tsParticles.addShape(ShapeType.edge, squareDrawer);
tsParticles.addShape(ShapeType.square, squareDrawer);
tsParticles.addShape(ShapeType.triangle, new TriangleDrawer());
tsParticles.addShape(ShapeType.star, new StarDrawer());
tsParticles.addShape(ShapeType.polygon, new PolygonDrawer());
tsParticles.addShape(ShapeType.char, textDrawer);
tsParticles.addShape(ShapeType.character, textDrawer);
tsParticles.addShape(ShapeType.image, imageDrawer);
tsParticles.addShape(ShapeType.images, imageDrawer);

export * from "tsparticles-core";
export { tsParticles, particlesJS, pJSDom };
