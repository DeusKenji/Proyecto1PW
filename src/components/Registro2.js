import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
} from "reactstrap";

const data = [
    {ID: 1, Nombres: 'Juan Camilo', Apellidos: 'Zuñiga Pacheco', Direccion: 'no se', Telefono: 12312231231},
];

class Registro2 extends React.Component {
    state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
        ID: '',
        Nombres: '',
        Apellidos: '',
        Direccion: '',
        Telefono: '',
    },
};

    mostrarModalActualizar = (dato) => {
    this.setState({
        form: dato,
        modalActualizar: true,
    });
    };

    cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
    };

    mostrarModalInsertar = () => {
    this.setState({
        modalInsertar: true,
    });
};

    cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
    };

    editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
        if (dato.ID == registro.ID) {
            arreglo[contador].Nombres = dato.Nombres;
            arreglo[contador].Apellidos = dato.Apellidos;
            arreglo[contador].Direccion = dato.Direccion;
            arreglo[contador].Telefono = dato.Telefono;
        }
        contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };

    eliminar = (dato) => {
        var opcion = window.confirm(
        "El elemento que deseas eliminar tiene el ID numero " + dato.ID
        );
        if (opcion == true) {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
            if (dato.id == registro.id) {
            arreglo.splice(contador, 1);
            }
            contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
        }
    };

    insertar = () => {
        var valorNuevo = { ...this.state.form };
        valorNuevo.id = this.state.data.length + 1;
        var lista = this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
    };

    handleChange = (e) => {
        this.setState({
        form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
        },
        });
    };

    render() {
        return (
        <>
            <Container>
            <br />
            <Button color="success" onClick={() => this.mostrarModalInsertar()}>
                Crear
            </Button>
            <br />
            <br />
            <Table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Direccion</th>
                    <th>Telefono</th>
                    <th>Opciones</th>
                </tr>
                </thead>

                <tbody>
                {this.state.data.map((dato) => (
                    <tr key={dato.ID}>
                    <td>{dato.ID}</td>
                    <td>{dato.Nombres}</td>
                    <td>{dato.Apellidos}</td>
                    <td>{dato.Direccion}</td>
                    <td>{dato.Telefono}</td>
                    <td>
                        <Button
                        color="primary"
                        onClick={() => this.mostrarModalActualizar(dato)}
                        >
                        Editar
                        </Button>{" "}
                        <Button color="danger" onClick={() => this.eliminar(dato)}>
                        Eliminar
                        </Button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            </Container>

            <Modal isOpen={this.state.modalActualizar}>
            <ModalHeader>
                <div>
                <h3>Editar Registro</h3>
                </div>
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                <label>ID:</label>
                <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.form.ID}
                />
                </FormGroup>
                <FormGroup>
                <label>Nombres:</label>
                <input
                    className="form-control"
                    name="Nombres"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.Nombres}
                />
                </FormGroup>
                <FormGroup>
                <label>Apellidos:</label>
                <input
                    className="form-control"
                    name="Apellidos"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.Apellidos}
                />
                </FormGroup>
                <FormGroup>
                <label>Direccion:</label>
                <input
                    className="form-control"
                    name="Direccion"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.Direccion}
                />
                </FormGroup>
                <FormGroup>
                <label>Telefono:</label>
                <input
                    className="form-control"
                    name="Telefono"
                    type="tel"
                    onChange={this.handleChange}
                    value={this.state.form.Telefono}
                />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button
                color="primary"
                onClick={() => this.editar(this.state.form)}
                >
                Editar
                </Button>
                <Button color="danger" onClick={() => this.cerrarModalActualizar()}>
                Cancelar
                </Button>
            </ModalFooter>
            </Modal>

            <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
                <div>
                <h3>Insertar Propietarios</h3>
                </div>
            </ModalHeader>

            <ModalBody>
            <FormGroup>
                <label>ID:</label>
                <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.data.length + 1}
                />
                </FormGroup>
                <FormGroup>
                <label>Nombres:</label>
                <input
                    className="form-control"
                    name="Nombres"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.Nombres}
                />
                </FormGroup>
                <FormGroup>
                <label>Apellidos:</label>
                <input
                    className="form-control"
                    name="Apellidos"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.Apellidos}
                />
                </FormGroup>
                <FormGroup>
                <label>Direccion:</label>
                <input
                    className="form-control"
                    name="Direccion"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.Direccion}
                />
                </FormGroup>
                <FormGroup>
                <label>Telefono:</label>
                <input
                    className="form-control"
                    name="Telefono"
                    type="tel"
                    onChange={this.handleChange}
                    value={this.state.form.Telefono}
                />
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" onClick={() => this.insertar()}>
                Insertar
                </Button>
                <Button
                className="btn btn-danger"
                onClick={() => this.cerrarModalInsertar()}
                >
                Cancelar
                </Button>
            </ModalFooter>
            </Modal>
        </>
        );
    }
    }
export default Registro2;