import React from "react";

import { FunnelPlus } from "lucide-react";

type TableFooterProps = {
  footerText?: string;
};

const TableFooter: React.FC<TableFooterProps> = () => {
  return (
    <tfoot className="Footer_pagination">
      <button>
        <FunnelPlus />
        <span>Previous</span>
      </button>
      <div style={{ display: "flex" }}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>

      <button>
        <span>Next</span>
        <FunnelPlus />
      </button>
    </tfoot>
  );
};

export default TableFooter;
