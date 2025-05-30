import { BrowserRouter, Link, Route, Routes } from "react-router"
import { Home } from "./pages/home"
import { OptimisticUi } from "./pages/optimistic-ui"
import { FolderStructure } from "./pages/folder-structure"

export const Router = () => {
  return <div className="flex flex-col gap-10">
    <BrowserRouter>
      <div className="m-auto flex gap-3">
        <Link to={"optimistic-ui"}>
          Go to Optimistic UI
        </Link>
        <Link to={"optimistic-ui"}>
          Go to Folder Structure
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/optimistic-ui" element={<OptimisticUi />} />
        <Route path="/folder-structure" element={<FolderStructure />} />
      </Routes>
    </BrowserRouter>
  </div>
}