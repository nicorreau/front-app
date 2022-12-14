import { useParams } from "react-router-dom";
import { getUsuario } from "../../js/getData";

function ActualizarUsuario(props) {
    let { idUsuario } = useParams();
    let usuario = getUsuario(idUsuario);
    return (
        <div className="col-12 w-75 mx-auto">
            <h3>Pagina: Actualizar Usuario</h3>
            <form>
                <div class="row g-3">
                    <div class="">
                        <label for="identifier" class="form-label">
                            Id
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="identifier"
                            defaultValue={usuario.id}
                            required={true}
                            readOnly={true}
                        />
                    </div>

                    <div class="">
                        <label for="firstName" class="form-label">
                            Nombre Persona
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="firstName"
                            placeholder="Nombre de la persona"
                            defaultValue={usuario.firstName}
                            required={true}
                            minLength={4}
                        />
                    </div>

                    <div class="col-12">
                        <label for="username" class="form-label">
                            Nombre de Usuario
                        </label>
                        <div class="input-group has-validation">
                            <span class="input-group-text">@</span>
                            <input
                                type="text"
                                class="form-control"
                                id="username"
                                placeholder="Username"
                                defaultValue={usuario.username}
                                required={true}
                                minLength={4}
                            />
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="email" class="form-label">
                            Correo
                        </label>
                        <input
                            type={"email"}
                            class="form-control"
                            id="email"
                            placeholder="ejemplo@dominio.com"
                            defaultValue={usuario.email}
                            required={true}
                        />
                    </div>

                    <div class="col-12">
                        <label for="password" class="form-label">
                            Contrasena
                        </label>
                        <input
                            type={"password"}
                            class="form-control"
                            id="password"
                            defaultValue={usuario.password}
                            required={true}
                        />
                    </div>

                    <div class="col-12">
                        <label for="password2" class="form-label">
                            Repita la Contrasena:
                        </label>
                        <input
                            type={"password"}
                            class="form-control"
                            id="password2"
                            defaultValue=""
                            required={true}
                        />
                    </div>

                    <hr class="my-4" />

                    <button
                        class="w-100 btn btn-primary btn-lg"
                        type="submit"
                        onClick={onClickSubmit}
                    >
                        Continue to checkout
                    </button>
                </div>
            </form>
        </div>
    );
}

function onClickSubmit(e) {
    console.log(e);
}

export default ActualizarUsuario;
