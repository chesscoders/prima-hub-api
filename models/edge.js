const { paginate, validate } = require('express-goodies/mongoose');
const { Schema, model } = require('mongoose');

const name = 'edge';

const schema = new Schema(
  {
    /* parent flow – makes pruning / querying by flow easy */
    flow: {
      type: Schema.Types.ObjectId,
      ref: 'flow',
      required: true,
      index: true,
    },

    /* endpoints (required) */
    source: {
      type: Schema.Types.ObjectId,
      ref: 'node',
      required: true,
    },
    target: {
      type: Schema.Types.ObjectId,
      ref: 'node',
      required: true,
    },

    /* optional handle IDs from the old diagram */
    sourceHandle: { type: String, default: null },
    targetHandle: { type: String, default: null },

    /* straight / step / short-step / … */
    edgeType: { type: String, default: 'straight', trim: true },

    /* ACL override if this edge should be hidden for some users */
    permission: { type: String, default: null },
  },
  { timestamps: true, autoCreate: false }
);

/* ── plugins ──────────────────────────────────────────────── */
schema.plugin(paginate);
schema.plugin(validate);
module.exports = model(name, schema);
