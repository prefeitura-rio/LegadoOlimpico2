const CWD = process.cwd();
import aq, { op } from "arquero";
import fs from "fs";

import { forceSimulation, forceX, forceY, quadtree } from "d3";

const PADDING = 1;

const rectCollide = (padding) => {
  let nodes;
  function force(alpha) {
    const quad = quadtree(
      nodes,
      (d) => d.x,
      (d) => d.y
    );
    for (const d of nodes) {
      quad.visit((q, x1, y1, x2, y2) => {
        let updated = false;
        if (q.data && q.data !== d) {
          let x = d.x - q.data.x,
            y = d.y - q.data.y,
            xSpacing = padding,
            ySpacing = padding,
            absX = Math.abs(x),
            absY = Math.abs(y),
            l,
            lx,
            ly;

          if (absX < xSpacing && absY < ySpacing) {
            l = Math.sqrt(x * x + y * y);

            lx = (absX - xSpacing) / l;
            ly = (absY - ySpacing) / l;

            // the one that's barely within the bounds probably triggered the collision
            if (Math.abs(lx) > Math.abs(ly)) {
              lx = 0;
            } else {
              ly = 0;
            }
            d.x -= x *= lx;
            d.y -= y *= ly;
            q.data.x += x;
            q.data.y += y;

            updated = true;
          }
        }
        return updated;
      });
    }
  }

  force.initialize = (_) => (nodes = _);

  return force;
};

//////////////////////

const calculateForceLayout = async () => {
  const raw = await aq.loadCSV(`${CWD}/src/data/gods/raw/light-db.csv`, {
    autoType: false,
    parse: { Text: String }
  });

  // Gods (nodes)
  const gods = raw
    .select({
      ID: "id",
      Name: "name",
      type: "importance",
      "Field (4 thematics)": "field",
      Text: "bio",
      "Other names or spelling": "spellings",
      "Illustration source": "source",
      "Aspects (other gods that can change into or him/her or share similar domains)": "aspect"
    })
    .derive({ name: (d) => op.trim(d.name), id: (d) => op.trim(d.id) })
    .filter((d) => d.id !== "cihuateteo")
    .derive({
      life: (d) => (op.match(d.field, "life") ? 1 : 0),
      death: (d) => (op.match(d.field, "death") ? 1 : 0),
      spiritual: (d) => (op.match(d.field, "spiritual expansion") ? 1 : 0),
      material: (d) => (op.match(d.field, "material expansion") ? 1 : 0),
      life_death: (d) =>
        op.match(d.field, "life") && !op.match(d.field, "death")
          ? 1
          : !op.match(d.field, "life") && op.match(d.field, "death")
          ? -1
          : 0,
      expansion: (d) =>
        op.match(d.field, "spiritual") && !op.match(d.field, "material")
          ? 1
          : !op.match(d.field, "spiritual") && op.match(d.field, "material")
          ? -1
          : 0
    });

  // Layout
  let nodes = [...gods.objects()];

  const simulation = forceSimulation(nodes);

  simulation

    .force(
      "x",
      forceX()
        .x((d) => d.life_death)
        .strength(0.7)
    )
    .force(
      "y",
      forceY()
        .y((d) => d.expansion)
        .strength(0.7)
    )
    .force("collide", rectCollide(PADDING));

  for (let i = 0; i < 1000; i++) simulation.tick();

  const coord = [
    ...nodes.map((n) => ({
      x: n.x - 0.5,
      y: n.y
    }))
  ];
  const god_nodes = [...gods.objects()].map((god, i) => ({
    ...coord[i],
    ...god
  }));
  return {
    god_nodes
  };
};

const getLayoutCoordinates = async () => {
  const aspect = await calculateForceLayout();

  const nodes = aspect.god_nodes;

  fs.writeFileSync(`${CWD}/src/data/gods/tidy/nodes.json`, JSON.stringify(nodes));
};

(async () => {
  getLayoutCoordinates();
})();
