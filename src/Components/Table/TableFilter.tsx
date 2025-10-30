import {
  Search,
  FunnelPlus,
  ArrowDownUp,
  FolderInput,
  FolderOutput,
} from "lucide-react";
import React from "react";

const TableFilter: React.FC = () => {
  return (
    <div className="filter_align">
      <div className="serach_postion_parent">
        <div>
          <input type="search" placeholder="Search..." />
        </div>
        <div className="search_icon">
          <Search />
        </div>
      </div>
      <div>
        <button>
          <FunnelPlus />
          <span>Filter</span>
        </button>
      </div>

      <div>
        <button>
          <ArrowDownUp />
          <span>Sort</span>
        </button>
      </div>

      <div>
        <button>
          <FolderInput />
          <span>Import</span>
        </button>
      </div>

      <div>
        <button>
          <FolderOutput />
          <span>Export</span>
        </button>
      </div>
    </div>
  );
};

export default TableFilter;
