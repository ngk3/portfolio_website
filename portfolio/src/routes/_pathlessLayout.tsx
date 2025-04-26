import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_pathlessLayout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div className="p-2">
      <div className="border-b">I'm a layout</div>
      <div>
        <Outlet />
      </div>

      <form>
        <label>
          <span>Username</span>
          <input type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
