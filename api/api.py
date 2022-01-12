import database
from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/organization", methods = ['GET', 'POST'])
def list_organizations():
    if request.method == 'GET':
        return jsonify(database.list_organizations())
    elif request.method == 'POST':
        return database.add_organization(request.get_json())


@app.route("/organization/<org_id>", methods = ['GET', 'POST', 'DELETE'])
def get_organization(org_id):
    if request.method == 'GET':
        return jsonify(database.get_organization(int(org_id)))
    elif request.method == 'POST':
        return jsonify(database.update_organization(org_id, request.get_json()))
    elif request.method == 'DELETE':
        database.delete_organization(org_id)
        return jsonify(success=True)


@app.route("/table/<table_name>", methods = ['GET'])
def dump_table(table_name):
    return jsonify(database.dump_table(table_name))
