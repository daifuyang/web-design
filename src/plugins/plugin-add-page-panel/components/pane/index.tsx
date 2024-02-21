import { useEffect, useState } from "react";
import AddPage from "src/page/addPage";
const { event } = (window as any).AliLowCodeEngine || {};

export const emitAddPageEventName = "eventBindAddPage.openModal"

const Pane = (props: any) => {

  const [open, setOpen] = useState<Boolean>(false)
  function toggleOpen(nextOpen: Boolean) {
    setOpen(nextOpen)
  }
  useEffect(() => {
    event.on(`common:${emitAddPageEventName}`, toggleOpen)
    return () => {
      event.off(`common:${emitAddPageEventName}`, toggleOpen)
    }
  }, [])

  return (
    <AddPage title="请选择模板" visible={open} style={{ width: '60%' }} height='80%' footerActions={["ok"]} onOk={
      () => {
        setOpen(false)
      }
    } onClose={() => {
      setOpen(false)
    }} />
  );
};

export default Pane;
