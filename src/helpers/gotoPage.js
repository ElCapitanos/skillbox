import eventBus from "@/eventBus";

export default function gotoPage(pageName, PageParams) {
  eventBus.$emit("gotoPage", pageName, PageParams);
}
