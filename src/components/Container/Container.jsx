import { SectionContainer, Title, DivInpuButton, Input, Task, Divisor, ButtonAdd, DeleteButton, Paragraph, AllBtn } from "./styles"

export const Container = () => {
  return (
    <>
    <div className="container">
        <SectionContainer>
        
            <Title>NuctaStacks</Title>
            <DivInpuButton>
            <Input type="text" placeholder="¿Qué tarea desea agregar?"/>
            <ButtonAdd>Agregar</ButtonAdd> 
            </DivInpuButton>

            <Task><Paragraph>Tarea 1</Paragraph> <DeleteButton>Borrar</DeleteButton></Task>
            <Divisor/>
            <Task><Paragraph>Tarea 2</Paragraph> <DeleteButton>Borrar</DeleteButton></Task>



            <AllBtn>Borrar Todas</AllBtn>
        </SectionContainer>
        </div>
    </>
  )
}
